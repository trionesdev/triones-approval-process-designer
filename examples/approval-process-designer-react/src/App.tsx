import React from 'react';
import './App.css';
import {ApprovalProcessDesigner, IProcessNode, ProcessWidget} from "@trionesdev/approval-process-designer-react";
import {ApprovalActivity, ConditionActivity, RouteActivity, StartActivity,CcActivity} from "./activities";

function App() {

    const processNode: IProcessNode = {
        type: 'START',
        componentName: 'StartActivity',
        title: '开始',
        nextNode:{
            type: 'APPROVAL',
            componentName: 'ApprovalActivity',
            title: '审批',
            nextNode:{
                type:'ROUTE',
                componentName:'RouteActivity',
                title:'路由',
                nextNode:{
                    type: 'CC',
                    componentName: 'CcActivity',
                    title: '抄送',
                },
                children:[
                    {
                        type:'CONDITION',
                        componentName:'ConditionActivity',
                        title:'条件',
                        nextNode:{
                            type: 'APPROVAL',
                            componentName: 'ApprovalActivity',
                            title: '审批',
                        }
                    },
                    {
                        type:'CONDITION',
                        componentName:'ConditionActivity',
                        props:{
                            defaultCondition:true,
                        }
                    }
                ]
            }
        }
    }

    return (
        <>
            <ApprovalProcessDesigner value={processNode}>
                <ProcessWidget activities={{StartActivity, ApprovalActivity,RouteActivity,ConditionActivity,CcActivity}}/>
            </ApprovalProcessDesigner>
        </>
    );
}

export default App;
