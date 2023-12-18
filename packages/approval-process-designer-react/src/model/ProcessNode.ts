import {autorun, define, observable, observe, reaction} from "@formily/reactive";
import randomstring from "randomstring"
import _ from "lodash";
import {GlobalStore} from "../store";
import {ApprovalProcessEngine} from "./ApprovalProcessEngine";

export type ProcessNodeType = 'START' | 'ROUTE' | 'CONDITION' | 'APPROVAL' | 'CC' | 'END'

export interface IProcessNode {
    engine?: ApprovalProcessEngine
    isSourceNode?: boolean
    id?: string
    type: ProcessNodeType
    componentName?: string
    nextNode?: IProcessNode
    children?: IProcessNode[]
    title?: string
    description?: string
    props?: any
}

const ProcessNodes = new Map<string, ProcessNode>()

export class ProcessNode {
    engine: ApprovalProcessEngine
    isSourceNode: boolean
    id: string
    type: ProcessNodeType
    componentName: string
    prevNodeId: string
    nextNode: ProcessNode
    children: ProcessNode[]
    title: string
    description: string
    props: any

    constructor(node: IProcessNode, parentNode?: ProcessNode) {
        this.engine = node.engine
        this.isSourceNode = node.isSourceNode
        this.id = node.id || `Activity_${randomstring.generate({
            length: 10,
            charset: 'alphabetic'
        })}`
        this.type = node.type
        this.componentName = node.componentName || node.type
        this.prevNodeId = parentNode?.id
        this.nextNode = null
        this.children = []
        this.title = node.title
        this.description = node.description
        this.props = node.props
        this.engine = parentNode?.engine

        ProcessNodes.set(this.id, this)
        if (node) {
            this.from(node)
        }
        this.makeObservable()
    }

    makeObservable() {
        define(this, {
            prevNodeId: observable.ref,
            title: observable.ref,
            description: observable.ref,
            nextNode: observable.ref,
            children: observable.shallow,
            props: observable
        })

        reaction(() => {
            return this.prevNodeId + this.title + this.description + this.nextNode?.id + this.children.length
        }, () => {
            if (!this.isSourceNode) {
                this.engine.handleChange(`${this.id} something changed`)
            }
        })

        observe(this.props, (change) => {
            if (!this.isSourceNode) {
                this.engine.handleChange(`${this.id} props changed`)
            }
        })

    }

    setNextNode(node: ProcessNode) {
        if (!node) {
            this.nextNode = null
            return
        }
        node.nextNode = this.nextNode
        this.nextNode = node
        node.prevNodeId = this.id
    }

    setChildren(nodes: ProcessNode[]) {
        if (_.isEmpty(nodes)) {
            return
        }
        _.forEach(nodes, (node) => {
            node.prevNodeId = this.id
        })
        this.children = nodes
    }

    from(node?: IProcessNode) {
        if (!node) return
        if (node.id && node.id !== this.id) {
            ProcessNodes.delete(this.id)
            ProcessNodes.set(node.id, this)
            this.id = node.id
        }
        this.type = node.type
        this.componentName = node.componentName || node.type
        this.title = node.title
        this.description = node.description
        this.props = node.props ?? {}
        if (node.engine) {
            this.engine = node.engine
        }

        if (node.nextNode) {
            this.nextNode = new ProcessNode(node.nextNode, this)
        }
        if (node.children && node.children.length > 0) {
            this.children = node.children?.map((node) => {
                return new ProcessNode(node, this)
            }) || []
        }
    }

    clone(parentNode?: ProcessNode) {
        const node = new ProcessNode({
            type: this.type,
            componentName: this.componentName,
            title: this.title,
            description: this.description,
            props: _.cloneDeep(this.props),
        }, parentNode)
        if (this.type == 'ROUTE') {
            const conditionResource = GlobalStore.getConditionActivityResource()
            const condition1 = conditionResource.node.clone(node)
            const conditionDefault = conditionResource.node.clone(node)
            conditionDefault.props = _.assign(conditionDefault.props, {defaultCondition: true})
            node.setChildren([condition1, conditionDefault])
        }
        return node
    }

    remove() {
        const parentNode = ProcessNodes.get(this.prevNodeId)

        if (this.type == "CONDITION") { //当前节点是条件节点
            const linkedIds = this.collectLinkIds()
            if (parentNode.children.length > 2) { //当分支超过2个时，只需要删除当前节点，否则，清除整个路由节点
                parentNode.children = _.filter(parentNode.children, (conditionNode: any) => {
                    return conditionNode.id !== this.id
                })
            } else {
                const parentParentNode = ProcessNodes.get(parentNode.prevNodeId) //条件节点的父节点是路由节点，如果清除整个路由，需要找到父节点的父节点
                linkedIds.push(parentNode.id);
                parentParentNode?.setNextNode(parentNode.nextNode)
            }
            _.forEach(linkedIds, (id: string) => {
                ProcessNodes.delete(id)
            })
        } else {
            parentNode?.setNextNode(this.nextNode)
            ProcessNodes.delete(this.id)
        }
    }

    /**
     * 添加条件分支
     */
    addConditionBranch() {
        if (this.type !== "ROUTE") {
            return
        }
        const conditionActivity = GlobalStore.getConditionActivityResource()?.node.clone(this)
        if (conditionActivity) {
            const newChildren = _.concat(this.children.slice(0, this.children.length - 1), conditionActivity, this.children.slice(this.children.length - 1))
            this.setChildren(newChildren)
        }
    }

    /**
     * 获取下面链路上的所有节点id
     */
    collectLinkIds() {
        let ids = []
        if (this.nextNode) {
            ids.push(this.nextNode.id)
            ids = ids.concat(this.nextNode.collectLinkIds())
        }
        if (this.children && this.children.length > 0) {
            this.children.forEach(child => {
                ids.push(child.id)
                ids = ids.concat(child.collectLinkIds())
            })
        }
        return ids
    }


    get index() {
        if (this.type === 'CONDITION') {
            const parentNode = ProcessNodes.get(this.prevNodeId)
            if (parentNode) {
                return parentNode.children?.indexOf(this) || 0
            }
        }
        return null
    }

    isFirst() {
        if (this.type !== 'CONDITION') {
            return false
        }
        return this.index === 0
    }

    isLast() {
        if (this.type !== 'CONDITION') {
            return false
        }
        const parentNode = ProcessNodes.get(this.prevNodeId)
        return this.index === ((parentNode?.children?.length || 0) - 1)
    }
}