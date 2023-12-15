import {IActivities} from "../types";
import React, {FC} from "react";
import {ActivityWidget} from "./ActivityWidget";
import {useProcessNode} from "../hooks/useProcessNode";
import {ActivitiesContext} from "../context";

type ProcessWidgetProps = {
    activities: IActivities
}
const ProcessWidget: FC<ProcessWidgetProps> = ({
                                                   activities
                                               }) => {
    const processNode = useProcessNode()
    return <ActivitiesContext.Provider value={activities}>
        <ActivityWidget processNode={processNode}></ActivityWidget>
    </ActivitiesContext.Provider>
}