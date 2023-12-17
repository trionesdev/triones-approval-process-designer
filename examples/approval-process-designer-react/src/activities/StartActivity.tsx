import {ActivityFC, DesignerCore, StartActivity as TdStartActivity} from "@trionesdev/approval-process-designer-react";
import createResource = DesignerCore.createResource;

export const StartActivity: ActivityFC<any> = TdStartActivity
StartActivity.Resource = createResource({
    type: 'START',
    componentName: 'StartActivity',
    title: '发起人'
})