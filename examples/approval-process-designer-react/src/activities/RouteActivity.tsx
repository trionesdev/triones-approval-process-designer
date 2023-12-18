import {
    ActivityFC,
    DesignerCore,
    IActivity,
    RouteActivity as TdRouteActivity
} from "@trionesdev/approval-process-designer-react";
import createResource = DesignerCore.createResource;

export const RouteActivity: ActivityFC<IActivity> = TdRouteActivity

RouteActivity.Resource = createResource({
    icon: 'RouteActivityIcon',
    type: 'ROUTE',
    componentName: 'RouteActivity',
    title: '条件分支',
    addable: true
})