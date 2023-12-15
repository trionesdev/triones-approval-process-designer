import React from "react";

export type IActivities={
    [key:string]:ActivityFC<any>
}

export interface IResource {
    icon?: string;
    componentName?: string;
    addable?: boolean;
}

export interface IActivity{

}

export type ActivityFC<P = IActivity> = React.FC<P> & {
    Resource?: IResource;
}