import styled from "@emotion/styled";
import React, {FC, useRef} from "react";
import {PlusIcon} from "../Icons";
import {Popover, Col, Row} from "../components";
import {observer} from "@formily/react";
import {useProcessEngine} from "../hooks";
import {AddActivityItemWidget} from "../widget/AddActivityItemWidget";
import {ProcessNode} from "../model";
import {useClickAway} from 'ahooks';

const AddActivityBoxStyled = styled('div')({
    width: '240px',
    display: 'inline-flex',
    flexShrink: 0,
    position: 'relative',
    '&::before': {
        content: '" "',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // zIndex: -1,
        margin: 'auto',
        width: '2px',
        height: '100%',
        backgroundColor: `#CACACA`
    },
    '.add-activity-btn': {
        userSelect: 'none',
        width: '240px',
        padding: '20px 0px 32px',
        display: 'flex',
        justifyContent: 'center',
        flexShrink: 0,
        flexGrow: 1,
        zIndex: 1,
        'button': {
            border: 'none',
            borderRadius: '50px',
            height: '32px',
            width: '32px',
            backgroundColor: '#1677ff',
            cursor: 'pointer',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            'span': {
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                'svg': {
                    color: '#fff',
                    fontSize: '16px'
                }
            }
        }
    }
})

type AddActivityBoxProps = {
    processNode: ProcessNode;
}

export const AddActivityBox: FC<AddActivityBoxProps> = observer(({
                                                                     processNode
                                                                 }) => {
    const btnRef = useRef<HTMLButtonElement>()
    const [open, setOpen] = React.useState(false)
    const popoverRef = useRef<any>(null);

    const engine = useProcessEngine()
    const {addableActivityResources} = engine


    useClickAway((e: any) => {
        if (btnRef.current.contains(e.target)) {

        } else {
            if (open) {
                setOpen(false)
            }
        }

    }, popoverRef);

    return <AddActivityBoxStyled className={`add-activity-box`}>
        <div className={`add-activity-btn`}>
            <Popover trigger={'click'} visible={open} placement={`rightTop`} showArrow={false}
                     content={<Row ref={popoverRef} gutter={[8, 8]} style={{width: '320px'}}>
                         {addableActivityResources?.map((resource) => {
                             return <Col span={12} key={`${resource.componentName}`}>
                                 <AddActivityItemWidget resource={resource} processNode={processNode} onClick={() => {
                                     setOpen(false)
                                 }}/>
                             </Col>
                         }) || []}
                     </Row>}>
                <button ref={btnRef} onClick={(e) => {
                    setOpen(!open)
                    // e.stopPropagation()
                }}><span>{React.cloneElement(PlusIcon)}</span></button>
            </Popover>
        </div>
    </AddActivityBoxStyled>
})