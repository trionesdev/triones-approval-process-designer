import {IActivities} from "../types";
import React, {FC, useEffect} from "react";
import {ActivityWidget} from "./ActivityWidget";
import {useProcessNode} from "../hooks/useProcessNode";
import {ActivitiesContext} from "../context";
import {EndActivity} from "../activity";
import styled from "@emotion/styled";
import {GlobalStore} from "../store";

const ProcessWidgetStyled = styled('div')({
    background: '#F0F2F5',
    paddingTop: 20,
    paddingBottom: 20,
})

type ProcessWidgetProps = {
    activities?: IActivities
}
export const ProcessWidget: FC<ProcessWidgetProps> = ({
                                                          activities
                                                      }) => {
    const processNode = useProcessNode()

    useEffect(() => {
        GlobalStore.registerActivityResources(activities)
    }, [])

    return <ActivitiesContext.Provider value={activities}>
        <ProcessWidgetStyled className={`process-widget`}>
            {processNode && <ActivityWidget processNode={processNode}></ActivityWidget>}
            <EndActivity/>
        </ProcessWidgetStyled>
    </ActivitiesContext.Provider>
}