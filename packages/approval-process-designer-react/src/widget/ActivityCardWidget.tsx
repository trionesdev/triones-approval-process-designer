import styled from "@emotion/styled";
import React from "react";
import {FC} from "react";
import {IResource} from "../types";

const ActivityCardWidgetStyled = styled('div')({
    color: 'black',
    // display: 'flex',
    // alignItems: 'center',
    minWidth: '0px',
    width: '100%',
    height: '50px',
    border: '1px solid #ecedef'
})

type ActivityCardWidgetProps = {
    resource: IResource
}
export const ActivityCardWidget: FC<ActivityCardWidgetProps> = ({
                                                                    resource
                                                                }) => {
    return <ActivityCardWidgetStyled>
        {resource?.icon && <span></span>}
        <div className={`title`}>{resource?.title}</div>
    </ActivityCardWidgetStyled>
}