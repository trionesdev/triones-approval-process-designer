import React, {FC, useEffect} from "react"
import {ApprovalProcessContext} from "../context";
import {ApprovalProcessEngine} from "../model/ApprovalProcessEngine";
import {IProcessNode, ProcessNode} from "../model";

type ApprovalProcessDesignerProps = {
    children?: React.ReactNode;
    engine?: ApprovalProcessEngine
    value?: IProcessNode
    onChange?: (value: any) => void
}

export const ApprovalProcessDesigner: FC<ApprovalProcessDesignerProps> = ({
                                                                              children,
                                                                              engine,
                                                                              value,
                                                                              onChange
                                                                          }) => {
    let scopeEngine = engine;
    if (!scopeEngine) {
        scopeEngine = new ApprovalProcessEngine();
    }

    scopeEngine?.setOnchange(onChange)

    useEffect(() => {
        if (value) {
            scopeEngine.process.from(value)
        }
    }, [value])

    return <ApprovalProcessContext.Provider value={scopeEngine}>
        {children}
    </ApprovalProcessContext.Provider>
}