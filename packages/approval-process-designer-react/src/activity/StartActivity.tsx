import React, {FC} from "react"
import {Activity} from "./Activity";
import {ProcessNode} from "../model";

type StartActivityProps = {
    processNode: ProcessNode
    nextActivity: React.ReactNode
}

export const StartActivity: FC<StartActivityProps> = ({
                                                          processNode,
                                                          nextActivity,

                                                      }) => {
    debugger
    return <>
        <Activity processNode={processNode}/>
        {nextActivity}
    </>
}