import {
    ActivityFC,
    DesignerCore,
    IActivity,
    StartActivity as TdStartActivity
} from "@trionesdev/approval-process-designer-react";
import createResource = DesignerCore.createResource;

export const StartActivity: ActivityFC<IActivity> = TdStartActivity
StartActivity.Resource = createResource({
    type: 'START',
    componentName: 'StartActivity',
    title: '发起人'
})