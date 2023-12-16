import {ProcessNode} from "./ProcessNode";
import {action, define, observable} from "@formily/reactive";
import {GlobalStore} from "../store";

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
            addableActivityResources: observable.computed
        })
    }

    get addableActivityResources() {
        return GlobalStore.getAddableActivityResources()
    }

}