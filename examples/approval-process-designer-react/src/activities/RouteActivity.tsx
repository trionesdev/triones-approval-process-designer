import {ActivityFC,RouteActivity as TdRouteActivity} from "@trionesdev/approval-process-designer-react";

export const RouteActivity : ActivityFC<any> = TdRouteActivity

RouteActivity.Resource = {
    componentName:'RouteActivity',
    title:'条件分支',
    addable:true
}