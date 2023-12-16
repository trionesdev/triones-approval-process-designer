import {ActivityFC,StartActivity as TdStartActivity} from "@trionesdev/approval-process-designer-react";

export const StartActivity : ActivityFC<any> = TdStartActivity
StartActivity.Resource = {
    componentName:'StartActivity',
    title:'抄送人',
    addable: true
}