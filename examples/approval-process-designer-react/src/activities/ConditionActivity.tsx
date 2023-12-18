import {
    ActivityFC,
    ConditionActivity as TdConditionActivity,
    DesignerCore, IActivity
} from "@trionesdev/approval-process-designer-react";
import createResource = DesignerCore.createResource;


export const ConditionActivity: ActivityFC<IActivity> = TdConditionActivity
ConditionActivity.Resource = createResource({
    type: 'CONDITION',
    componentName: 'ConditionActivity'
})