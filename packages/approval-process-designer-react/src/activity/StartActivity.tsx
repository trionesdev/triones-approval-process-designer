import React, {FC} from "react"
import {Activity} from "./Activity";
import {ProcessNode} from "../model";

type StartActivityProps = {
    processNode: ProcessNode
    nextActivity: React.ReactNode
    onClick?: (processNode: ProcessNode) => void
}

export const StartActivity: FC<StartActivityProps> = ({
                                                          processNode,
                                                          nextActivity,
                                                          onClick

                                                      }) => {
    return <>
        <Activity processNode={processNode} onClick={onClick}/>
        {nextActivity}
    </>
}