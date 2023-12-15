import {define, observable} from "@formily/reactive";
import randomstring from "randomstring"

type ProcessNodeType = 'START' | 'ROUTE' | 'CONDITION' | 'APPROVAL' | 'END'

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
        } else {
            if (node.children) {
                this.children = node.children?.map((node) => {
                    return new ProcessNode(node, this)
                }) || []
            }
        }
    }
}