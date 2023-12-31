import {IActivities} from "../types";
import React, {FC, useEffect} from "react";
import {ActivityWidget} from "./ActivityWidget";
import {useProcess} from "../hooks/useProcess";
import {ActivitiesContext} from "../context";
import {EndActivity} from "../activity";
import styled from "@emotion/styled";
import {GlobalStore} from "../store";

const ProcessWidgetStyled = styled('div')({
    background: '#F0F2F5',
    paddingTop: 20,
    paddingBottom: 20,
    minWidth:'min-content'
})

type ProcessWidgetProps = {
    activities?: IActivities
}
export const ProcessWidget: FC<ProcessWidgetProps> = ({
                                                          activities
                                                      }) => {
    const processNode = useProcess()

    GlobalStore.registerActivityResources(activities)

    return <ActivitiesContext.Provider value={activities}>
        <ProcessWidgetStyled className={`process-widget`}>
            {processNode && <ActivityWidget processNode={processNode}></ActivityWidget>}
            <EndActivity/>
        </ProcessWidgetStyled>
    </ActivitiesContext.Provider>
}