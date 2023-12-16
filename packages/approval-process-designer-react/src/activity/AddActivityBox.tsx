import styled from "@emotion/styled";
import React, {FC} from "react";
import {PlusIcon} from "../Icons";
import {Popover} from "../components";

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

type AddActivityBoxProps = {}

export const AddActivityBox: FC<AddActivityBoxProps> = ({}) => {
    return <AddActivityBoxStyled className={`add-activity-box`}>
        <div className={`add-activity-btn`}>
            <Popover trigger={'click'} placement={`rightTop`} title={'sss'}>
                <button><span>{React.cloneElement(PlusIcon)}</span></button>
            </Popover>
        </div>
    </AddActivityBoxStyled>
}