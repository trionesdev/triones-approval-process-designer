import {ActivityFC,ApprovalActivity as TdApprovalActivity} from "@trionesdev/approval-process-designer-react";

export const ApprovalActivity : ActivityFC<any> = TdApprovalActivity

ApprovalActivity.Resource = {
    componentName:'ApprovalActivity',
    title:'审批人',
    addable:true
}