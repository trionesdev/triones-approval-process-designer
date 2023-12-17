import React from 'react';
import './App.css';
import {
    ApprovalProcessDesigner,
    IProcessNode,
    ProcessWidget, StudioPanel
} from "@trionesdev/approval-process-designer-react";
import {ApprovalActivity, ConditionActivity, RouteActivity, StartActivity, CcActivity} from "./activities";
import {Watermark} from "antd";

function App() {

    const processNode: IProcessNode = {
        type: 'START',
        componentName: 'StartActivity',
        title: '开始',
        nextNode: {
            type: 'APPROVAL',
            componentName: 'ApprovalActivity',
            title: '审批',
            nextNode: {
                type: 'ROUTE',
                componentName: 'RouteActivity',
                title: '路由',
                nextNode: {
                    type: 'CC',
                    componentName: 'CcActivity',
                    title: '抄送人',
                },
                children: [
                    {
                        type: 'CONDITION',
                        componentName: 'ConditionActivity',
                        title: '条件1',
                        nextNode: {
                            type: 'APPROVAL',
                            componentName: 'ApprovalActivity',
                            title: '审批人',
                        }
                    },
                    {
                        type: 'CONDITION',
                        componentName: 'ConditionActivity',
                        props: {
                            defaultCondition: true,
                        }
                    }
                ]
            }
        }
    }

    return (
        <div>
            <Watermark style={{height: '100%'}} content={['书阙', '北斗开源']}>
                <ApprovalProcessDesigner value={processNode}>
                    <StudioPanel>
                        <ProcessWidget activities={{
                            StartActivity,
                            ApprovalActivity,
                            RouteActivity,
                            ConditionActivity,
                            CcActivity
                        }}/>
                    </StudioPanel>
                </ApprovalProcessDesigner>
            </Watermark>
        </div>
    );
}

export default App;
