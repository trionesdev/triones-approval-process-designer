import React, {Component, FC} from "react";
import {ProcessNode} from "../model";
import {observer} from "@formily/react";
import {useActivities} from "../hooks";
import {ActivityFC} from "../types";

type ActivityWidgetProps = {
    processNode: ProcessNode;
}

export const ActivityWidget: FC<ActivityWidgetProps> = observer(({
                                                                     processNode
                                                                 }) => {
    const activities = useActivities()
    const handleRender = () => {
        const Activity:ActivityFC<any> = activities?.[processNode.componentName];
        
        const renderChildren = () => {
          return null
        }
        
        const renderProps = () => {
          return {}
        }
        
        if (Activity){
            return React.createElement(Activity, renderProps(),renderChildren())
        }else {
            return null
        }
    }

    return <>{handleRender()}</>
})