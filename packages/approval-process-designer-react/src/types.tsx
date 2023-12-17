import React from "react";
import {ProcessNode, ProcessNodeType} from "./model";

export type IActivities={
    [key:string]:ActivityFC<any>
}

export interface IResourceCreator {
    type: ProcessNodeType
    icon?: string;
    componentName?: string;
    title?: string;
    description?: string;
    props?: any;
    addable?: boolean;
}
export interface IResource extends IResourceCreator{
    node?: ProcessNode
}

export interface IActivity{

}

export type ActivityFC<P = IActivity> = React.FC<P> & {
    Resource?: IResource;
}