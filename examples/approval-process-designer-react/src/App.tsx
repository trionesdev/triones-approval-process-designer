import React from 'react';
import './App.css';
import {
    Activity,
    ActivityProps, ApprovalProcessDesigner, ConditionActivity,
    EndActivity, IProcessNode,
    ProcessNode, ProcessWidget,
    RouteActivity
} from "@trionesdev/approval-process-designer-react";
import {ApprovalActivity, StartActivity} from "./activities";

function App() {

    const processNode: IProcessNode = {
        type: 'START',
        componentName: 'StartActivity',
        title: '开始',
        nextNode:{
            type: 'APPROVAL',
            componentName: 'ApprovalActivity',
            title: '审批',
        }
    }

    return (
        <>
            <ApprovalProcessDesigner value={processNode}>
                <ProcessWidget activities={{StartActivity, ApprovalActivity}}/>
            </ApprovalProcessDesigner>
        </>
    );
}

export default App;
