import {ActivityFC, DesignerCore, RouteActivity as TdRouteActivity} from "@trionesdev/approval-process-designer-react";
import createResource = DesignerCore.createResource;

export const RouteActivity: ActivityFC<any> = TdRouteActivity

RouteActivity.Resource = createResource({
    type: 'ROUTE',
    componentName: 'RouteActivity',
    title: '条件分支',
    addable: true
})