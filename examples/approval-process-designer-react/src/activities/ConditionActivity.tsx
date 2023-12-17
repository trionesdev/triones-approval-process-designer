import {
    ActivityFC,
    ConditionActivity as TdConditionActivity,
    DesignerCore
} from "@trionesdev/approval-process-designer-react";
import createResource = DesignerCore.createResource;


export const ConditionActivity: ActivityFC<any> = TdConditionActivity
ConditionActivity.Resource = createResource({
    type: 'CONDITION',
    componentName: 'ConditionActivity'
})