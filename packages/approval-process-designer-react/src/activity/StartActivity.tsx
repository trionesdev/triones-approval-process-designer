import React, {FC} from "react"
import {Activity} from "./Activity";
import {IActivity} from "../types";

type StartActivityProps = IActivity

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