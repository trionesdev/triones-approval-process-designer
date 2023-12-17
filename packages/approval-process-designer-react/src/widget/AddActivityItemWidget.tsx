import styled from "@emotion/styled";
import React from "react";
import {FC} from "react";
import {IResource} from "../types";
import {IconWidget} from "./IconWidget";
import {GlobalStore} from "../store";
import {ProcessNode} from "../model";

const ActivityCardWidgetStyled = styled('div')({
    cursor: 'pointer',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    minWidth: '0px',
    width: '100%',
    height: '50px',
    padding: '10px',
    boxSizing: 'border-box',
    background: 'rgba(17, 31, 44, 0.02)',
    [`&:hover`]: {
        background: '#FFFFFF',
        border: '1px solid #ecedef',
        boxShadow: '0 2px 8px 0 rgba(17, 31, 44, 0.08)'
    }
})

type ActivityCardWidgetProps = {
    resource: IResource
    processNode: ProcessNode
    onClick: (processNode: ProcessNode) => void
}
export const AddActivityItemWidget: FC<ActivityCardWidgetProps> = ({
                                                                       resource,
                                                                       processNode,
                                                                       onClick
                                                                   }) => {
    const handleClick = () => {
        onClick?.(processNode)
        const activity = GlobalStore.getActivityResource(resource?.componentName)
        debugger
        processNode.setNextNode(activity?.node.clone(processNode))
    }
    return <ActivityCardWidgetStyled onClick={handleClick}>
        <IconWidget icon={GlobalStore.getIcon(resource?.icon)}/>
        <div className={`title`}>{resource?.title}</div>
    </ActivityCardWidgetStyled>
}