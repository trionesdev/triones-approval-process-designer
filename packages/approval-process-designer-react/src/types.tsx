import React from "react";

export type IActivities={
    [key:string]:ActivityFC<any>
}

export interface IActivity{

}

export type ActivityFC<P = IActivity> = React.FC<P> & {

}