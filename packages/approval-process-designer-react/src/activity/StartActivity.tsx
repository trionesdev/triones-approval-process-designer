import React, {FC} from "react"
import {Activity} from "./Activity";
import {ProcessNode} from "../model";

type StartActivityProps = {
    nextActivity: React.ReactNode
    processNode: ProcessNode
}

export const StartActivity: FC<StartActivityProps> = ({nextActivity, processNode}) => {
    return <>
        <Activity processNode={processNode}/>
        {nextActivity}
    </>
}