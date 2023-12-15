import React, {FC} from "react";
import {ProcessNode} from "../model";
import {Activity} from "./Activity";

type ApprovalActivityProps = {
    nextActivity: React.ReactNode
    processNode: ProcessNode
}
export const ApprovalActivity: FC<ApprovalActivityProps> = ({
                                                                processNode,
                                                                nextActivity,
                                                            }) => {
    return <>
        <Activity processNode={processNode}/>
        {nextActivity}
    </>
}