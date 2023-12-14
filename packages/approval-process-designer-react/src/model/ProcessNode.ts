import {define, observable} from "@formily/reactive";
import randomstring from "randomstring"

type ProcessNodeType = 'START' | 'ROUTE' | 'CONDITION' | 'APPROVAL' | 'END'

interface IProcessNode {
    nodeId: string
    type: ProcessNodeType
    children: IProcessNode[]
    props: any
}

const ProcessNodes = new Map<string, ProcessNode>()

export class ProcessNode {
    nodeId: string
    type: ProcessNodeType
    prevNodeId: string
    nextNode: ProcessNode
    children: ProcessNode[]
    props: any

    constructor(processNode: IProcessNode, parentNode: ProcessNode) {
        this.nodeId = processNode.nodeId || `Activity_${randomstring.generate({
            length: 10,
            charset: 'alphabetic'
        })}`
        this.type = processNode.type
        this.prevNodeId = parentNode?.nodeId
        this.nextNode = null
        this.children = []
        this.props = processNode.props

        ProcessNodes.set(this.nodeId, this)
        this.makeObservable()
    }

    makeObservable() {
        define(this, {
            children: observable.shallow,
        })
    }
}