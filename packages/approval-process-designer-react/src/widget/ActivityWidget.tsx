import React, {Component, FC} from "react";
import {ProcessNode} from "../model";
import {observer} from "@formily/react";
import {useActivities} from "../hooks";
import {ActivityFC} from "../types";
import _ from "lodash"

type ActivityWidgetProps = {
    processNode: ProcessNode;
}

export const ActivityWidget: FC<ActivityWidgetProps> = observer(({
                                                                     processNode
                                                                 }) => {
    const activities = useActivities()
    const handleRender = () => {
        const Activity:ActivityFC<any> = _.get(activities,[processNode.componentName]);
        
        const renderChildren = () => {
          return null
        }
        
        const renderProps = () => {
          return {
              processNode: processNode,
              nextActivity:  processNode.nextNode && <ActivityWidget processNode={processNode.nextNode}/>,
          }
        }
        
        if (Activity){
            return React.createElement(Activity, renderProps(),renderChildren())
        }else {
            return null
        }
    }

    return <>{handleRender()}</>
})