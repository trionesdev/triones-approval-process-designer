import React, {FC} from "react";
import {ProcessNode} from "../model";
import {Activity} from "./Activity";
import {IActivity} from "../types";

type ApprovalActivityProps = IActivity
export const ApprovalActivity: FC<ApprovalActivityProps> = ({
                                                                processNode,
                                                                nextActivity,
                                                                onClick
                                                            }) => {
    return <>
        <Activity titleStyle={{backgroundColor: 'rgb(255, 148, 62)'}} processNode={processNode} closeable={true} onClick={onClick}/>
        {nextActivity}
    </>
}