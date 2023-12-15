import React, {FC} from "react"
import {ApprovalProcessContext} from "../context";

type ApprovalProcessDesignerProps = {}

export const ApprovalProcessDesigner: FC<ApprovalProcessDesignerProps> = ({}) => {
    return <ApprovalProcessContext.Provider value={{}}>

    </ApprovalProcessContext.Provider>
}