import {
    ActivityFC,
    CcActivity as TdCcActivity,
    DesignerCore,
    IActivity
} from "@trionesdev/approval-process-designer-react";
import createResource = DesignerCore.createResource;

export const CcActivity: ActivityFC<IActivity> = TdCcActivity

CcActivity.Resource = createResource({
    type: 'CC',
    icon: 'CcActivityIcon',
    componentName: 'CcActivity',
    title: '抄送人',
    addable: true
})