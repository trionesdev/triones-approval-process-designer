import {ProcessNode} from "./ProcessNode";
import {define, observable} from "@formily/reactive";

interface IApprovalProcessEngine {

}

export class ApprovalProcessEngine {
    processNode: ProcessNode;

    constructor(engine?: IApprovalProcessEngine) {
        this.processNode = new ProcessNode({
            type: 'START',
            componentName: 'StartActivity',
            title: '开始'
        });
        this.makeObservable()
    }

    makeObservable() {
        define(this, {
            processNode: observable,
        })
    }

}