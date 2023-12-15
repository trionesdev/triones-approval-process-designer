import {IActivities} from "../types";
import React, {FC} from "react";
import {ActivityWidget} from "./ActivityWidget";
import {useProcessNode} from "../hooks/useProcessNode";
import {ActivitiesContext} from "../context";
import {EndActivity} from "../activity";

type ProcessWidgetProps = {
    activities?: IActivities
}
export const ProcessWidget: FC<ProcessWidgetProps> = ({
                                                          activities
                                                      }) => {
    const processNode = useProcessNode()
    return <ActivitiesContext.Provider value={activities}>
        {processNode && <ActivityWidget processNode={processNode}></ActivityWidget>}
        <EndActivity/>
    </ActivitiesContext.Provider>
}