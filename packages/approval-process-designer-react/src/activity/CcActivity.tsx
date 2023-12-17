import React, {FC} from "react"
import {ProcessNode} from "../model";
import {Activity} from "./Activity";

type CcActivityProps = {
    processNode: ProcessNode
    nextActivity: React.ReactNode
}

export const CcActivity: FC<CcActivityProps> = ({
                                                    processNode,
                                                    nextActivity,
                                                }) => {
    return <>
        <Activity titleStyle={{backgroundColor: 'rgb(50, 150, 250)'}} processNode={processNode} closeable={true}/>
        {nextActivity}
    </>
}