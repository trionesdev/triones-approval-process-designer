import {
    ActivityFC,
    ApprovalActivity as TdApprovalActivity,
    DesignerCore, IActivity
} from "@trionesdev/approval-process-designer-react";
import createResource = DesignerCore.createResource;
import {Button, Drawer, Form, Input} from "antd";
import {useState} from "react";

export const ApprovalActivity: ActivityFC<IActivity> = ({...props}) => {
    const [form] = Form.useForm()

    const [open, setOpen] = useState(false)


    const handleClick = () => {
        setOpen(true)
    }

    const handleSave = () => {
        form.validateFields().then((values: any) => {
            props.processNode.description = values.description
        })
    }

    return <>
        <TdApprovalActivity {...props} onClick={handleClick}/>
        <Drawer open={open} onClose={() => {
            setOpen(false)
        }}
                footer={<div>
                    <Button onClick={handleSave}>确定</Button>
                </div>}
        >
            <Form form={form}>
                <Form.Item label={`描述`} name={`description`}>
                    <Input/>
                </Form.Item>
            </Form>
        </Drawer>
    </>
}

ApprovalActivity.Resource = createResource({
    icon: 'ApprovalActivityIcon',
    type: 'APPROVAL',
    componentName: 'ApprovalActivity',
    title: '审批人',
    addable: true
})
