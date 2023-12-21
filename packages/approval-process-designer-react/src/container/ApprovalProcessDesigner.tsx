import React, {FC, useEffect, useMemo, useState} from "react"
import {ApprovalProcessContext} from "../context";
import {ApprovalProcessEngine} from "../model/ApprovalProcessEngine";
import {IProcessNode} from "../model";
import _ from "lodash";

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
    const [scopeValue, setScopeValue] = useState(value)


    let designerEngine = useMemo(() => {
        let scopeEngine = engine;
        if (!engine) {
            scopeEngine = new ApprovalProcessEngine({value: value});
        }
        return scopeEngine
    }, [engine])

    designerEngine?.setOnchange((value: any) => {
        setScopeValue(value)
        onChange?.(value)
    })


    useEffect(() => {
        if (value && !_.isEqual(value, scopeValue)) {
            designerEngine.process.from(value)
        }
    }, [value])

    return <ApprovalProcessContext.Provider value={designerEngine}>
        {children}
    </ApprovalProcessContext.Provider>
}