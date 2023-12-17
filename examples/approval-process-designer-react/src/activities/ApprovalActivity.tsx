import {
    ActivityFC,
    ApprovalActivity as TdApprovalActivity,
    DesignerCore
} from "@trionesdev/approval-process-designer-react";
import createResource = DesignerCore.createResource;

export const ApprovalActivity : ActivityFC<any> = TdApprovalActivity

ApprovalActivity.Resource = createResource({
    icon:'ApprovalActivityIcon',
    type: 'APPROVAL',
    componentName:'ApprovalActivity',
    title:'审批人',
    addable:true
})