import React, {FC} from "react";
import {ProcessNode} from "../model";
import {Activity} from "./Activity";

type ApprovalActivityProps = {
    nextActivity: React.ReactNode
    processNode: ProcessNode
    onClick?: (processNode: ProcessNode) => void
}
export const ApprovalActivity: FC<ApprovalActivityProps> = ({
                                                                processNode,
                                                                nextActivity,
                                                                onClick
                                                            }) => {
    return <>
        <Activity processNode={processNode} closeable={true} onClick={onClick}/>
        {nextActivity}
    </>
}