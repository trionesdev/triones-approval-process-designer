import React, {Component, FC} from "react";
import {ProcessNode} from "../model";
import {observer} from "@formily/react";
import {useActivities} from "../hooks";
import {ActivityFC} from "../types";
import _ from "lodash"
import {ProcessNodeContext} from "../context";

type ActivityWidgetProps = {
    processNode: ProcessNode;
    [key: string]: any
}

export const ActivityWidget: FC<ActivityWidgetProps> = observer(({
                                                                     processNode,
                                                                     ...props
                                                                 }) => {
    const activities = useActivities()
    const handleRender = () => {
        const Activity: ActivityFC<any> = _.get(activities, [processNode.componentName]);

        const renderChildren = () => {
            if (processNode.children.length > 0) {
                return processNode.children.map((child, index) =>
                    <ActivityWidget key={`${child.id}-${index}`} processNode={child}/>)
            } else {
                return []
            }
        }

        const renderProps = () => {
            return {
                processNode: processNode,
                nextActivity: processNode.nextNode && <ActivityWidget processNode={processNode.nextNode}/>,
                ...props
            }
        }

        if (Activity) {
            return React.createElement(Activity, renderProps(), renderChildren())
        } else {
            return null
        }
    }

    return <ProcessNodeContext.Provider value={processNode}>{handleRender()}</ProcessNodeContext.Provider>
})