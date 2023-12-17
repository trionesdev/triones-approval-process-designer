import {define, observable} from "@formily/reactive";
import randomstring from "randomstring"
import _ from "lodash";

type ProcessNodeType = 'START' | 'ROUTE' | 'CONDITION' | 'APPROVAL' | 'CC' | 'END'

export interface IProcessNode {
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

        ProcessNodes.set(this.id, this)
        if (node) {
            this.from(node)
        }
        this.makeObservable()
    }

    makeObservable() {
        define(this, {
            nextNode: observable.ref,
            children: observable.shallow,
            props: observable
        })
    }

    setNextNode(node: ProcessNode) {
        if (!node) {
            this.nextNode = null
            return
        }
        this.nextNode = node
        node.prevNodeId = this.id
    }

    from(node?: IProcessNode) {
        if (!node) return
        if (node.id && node.id !== this.id) {
            ProcessNodes.delete(this.id)
            ProcessNodes.set(node.id, this)
            this.id = node.id
        }
        this.props = node.props ?? {}

        if (node.nextNode) {
            this.nextNode = new ProcessNode(node.nextNode, this)
        }
        if (node.children && node.children.length > 0) {
            this.children = node.children?.map((node) => {
                return new ProcessNode(node, this)
            }) || []
        }
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
}