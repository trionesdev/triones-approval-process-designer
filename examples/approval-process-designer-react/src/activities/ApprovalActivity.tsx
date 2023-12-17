import {
    ActivityFC,
    ApprovalActivity as TdApprovalActivity,
    DesignerCore
} from "@trionesdev/approval-process-designer-react";
import createResource = DesignerCore.createResource;
import {Drawer} from "antd";
import {useState} from "react";

export const ApprovalActivity: ActivityFC<any> = ({...props}) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true)
    }

    return <>
        <TdApprovalActivity {...props} onClick={handleClick}/>
        <Drawer open={open}></Drawer>
    </>
}

ApprovalActivity.Resource = createResource({
    icon: 'ApprovalActivityIcon',
    type: 'APPROVAL',
    componentName: 'ApprovalActivity',
    title: '审批人',
    addable: true
})