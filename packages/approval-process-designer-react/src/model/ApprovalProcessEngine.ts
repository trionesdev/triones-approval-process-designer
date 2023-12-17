import {ProcessNode} from "./ProcessNode";
import {define, observable} from "@formily/reactive";
import {GlobalStore} from "../store";
import {DesignerCore} from "../util";
import _ from "lodash";

interface IApprovalProcessEngine {

}

export class ApprovalProcessEngine {
    process: ProcessNode;
    onChange?: (value: any) => void

    constructor(engine?: IApprovalProcessEngine) {
        this.process = new ProcessNode({
            engine: this,
            type: 'START',
            componentName: 'StartActivity',
            title: '开始'
        });
        this.makeObservable()
    }

    makeObservable() {
        define(this, {
            process: observable,
            addableActivityResources: observable.computed
        })
    }

    handleChange = _.debounce((msg: any)=>{
        this.onChange?.(DesignerCore.transformToSchema(this.process))
    },100)

    setOnchange(fn: (value: any) => void) {
        this.onChange = fn
    }

    get addableActivityResources() {
        return GlobalStore.getAddableActivityResources()
    }

}