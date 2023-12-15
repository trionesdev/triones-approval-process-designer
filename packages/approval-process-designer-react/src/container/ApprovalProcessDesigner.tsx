import React, {FC, useEffect} from "react"
import {ApprovalProcessContext} from "../context";
import {ApprovalProcessEngine} from "../model/ApprovalProcessEngine";
import {ProcessNode} from "../model";

type ApprovalProcessDesignerProps = {
    children?: React.ReactNode;
    engine?: ApprovalProcessEngine
    value?: any
}

export const ApprovalProcessDesigner: FC<ApprovalProcessDesignerProps> = ({
                                                                              children,
                                                                              engine,
                                                                              value
                                                                          }) => {
    let scopeEngine = engine;
    if (!scopeEngine) {
        scopeEngine = new ApprovalProcessEngine();
    }

    useEffect(() => {
        if (value) {
            scopeEngine.processNode.from(value)
        }
    }, [value])

    return <ApprovalProcessContext.Provider value={scopeEngine}>
        {children}
    </ApprovalProcessContext.Provider>
}