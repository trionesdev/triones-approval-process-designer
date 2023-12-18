import React, {FC} from "react"
import {Activity} from "./Activity";
import {IActivity} from "../types";

type CcActivityProps = IActivity

export const CcActivity: FC<CcActivityProps> = ({
                                                    processNode,
                                                    nextActivity,
                                                    onClick
                                                }) => {
    return <>
        <Activity titleStyle={{backgroundColor: 'rgb(50, 150, 250)'}} processNode={processNode} closeable={true}
                  onClick={onClick}/>
        {nextActivity}
    </>
}