import {IActivities} from "../types";
import React, {FC, useEffect} from "react";
import {ActivityWidget} from "./ActivityWidget";
import {useProcessNode} from "../hooks/useProcessNode";
import {ActivitiesContext} from "../context";
import {EndActivity} from "../activity";
import styled from "@emotion/styled";
import {GlobalStore} from "../store";
import {Col, Row} from "../components";

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

    GlobalStore.registerActivityResources(activities)

    return <ActivitiesContext.Provider value={activities}>
        <ProcessWidgetStyled className={`process-widget`}>
            <div>
            <Row>
                <Col span={12}>1</Col>
                <Col span={12}>2</Col>
                <Col span={12}>3</Col>
                <Col span={12}>4</Col>
            </Row>
            </div>
            {processNode && <ActivityWidget processNode={processNode}></ActivityWidget>}
            <EndActivity/>
        </ProcessWidgetStyled>
    </ActivitiesContext.Provider>
}