import {ActivityFC, CcActivity as TdCcActivity, DesignerCore} from "@trionesdev/approval-process-designer-react";
import createResource = DesignerCore.createResource;

export const CcActivity: ActivityFC<any> = TdCcActivity

CcActivity.Resource = createResource({
    type: 'CC',
    icon: '',
    componentName: 'CcActivity',
    title: '抄送人',
    addable: true
})