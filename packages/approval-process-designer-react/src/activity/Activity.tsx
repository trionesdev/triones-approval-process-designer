import styled from "@emotion/styled";
import React, {createRef, FC, useEffect, useState} from "react";
import classNames from "classnames";
import {ProcessNode} from "../model";
import {CloseIcon, RightIcon} from "../Icons";
import {AddActivityBox} from "./AddActivityBox";
import {IconWidget} from "../widget/IconWidget";

const ActivityStyled = styled('div')({
    boxSizing: 'border-box',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    padding: '0 50px',
    position: 'relative',
    '.activity-box': {
        display: 'inline-flex',
        flexDirection: 'column',
        position: 'relative',
        width: '220px',
        minHeight: '72px',
        flexShrink: 0,
        background: '#FFFFFF',
        borderRadius: '4px',
        cursor: 'pointer',
        '&:hover': {
            '.editable-title': {
                borderBottom: 'dashed 1px #FFFFFF',
            },
            '.close': {
                display: 'inline-flex!important'
            }
        },
        '&::after': {
            pointerEvents: 'none',
            content: '" "',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2,
            borderRadius: '4px',
            border: '1px solid transparent',
            transition: 'all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)',
            boxShadow: ' 0 2px 5px 0 rgba(0, 0, 0, 0.1)'
        },
        '.header': {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '16px',
            paddingRight: '16px',
            width: '100%',
            height: '24px',
            lineHeight: '24px',
            fontSize: '12px',
            color: '#FFFFFF',
            textAlign: 'left',
            background: '#576A95',
            borderRadius: '4px 4px 0px 0px',
            justifyContent: 'space-between',
            '.close': {
                display: 'none'
            },
            'input': {
                outline: 'none'
            }
        },
        '.editable-title': {
            lineHeight: '15px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis'
        },
        '.body': {
            position: 'relative',
            fontSize: '14px',
            padding: '16px',
            // paddingRight: '30px',
            display: 'flex',
            justifyContent: 'space-between',
            '.text': {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box'
            },
            'span': {
                display: 'inline-flex',
                alignItems: 'center',
                'svg': {
                    width: '1rem',
                    height: '1rem'
                }
            }
        }
    }
})

export type ActivityProps = {
    children?: React.ReactNode
    processNode?: ProcessNode
    titleStyle?: React.CSSProperties
    titleEditable?: boolean
    onChange?: (v: string) => void
    closeable?: boolean
    onClick?: () => void
}
export const Activity: FC<ActivityProps> = ({
                                                children,
                                                processNode,
                                                titleStyle,
                                                titleEditable,
                                                onChange,
                                                closeable,
                                                onClick,
                                            }) => {
    const inputRef = createRef<any>()
    const [editing, setEditing] = useState(false)
    const handleInputBlur = (e: any) => {
        if (onChange) {
            onChange(e.target.value)
        }
        setEditing(false)
    }

    const handleRemove = () => {
        processNode?.remove()
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [inputRef])


    return <ActivityStyled className={`activity`}>
        <div className={`activity-box`}>
            <div>
                <div style={titleStyle} className={classNames('header', {'editable-title': titleEditable})}>
                    <div>
                        {editing ? <input ref={inputRef} defaultValue={processNode.title} onBlur={handleInputBlur}/> :
                            <span className={classNames({'editable-title': titleEditable})}
                                  onClick={(e) => {
                                      e.stopPropagation();
                                      setEditing(true)
                                  }}>{processNode?.title}</span>}

                    </div>
                    {closeable &&
                        <IconWidget className={`close`} onClick={handleRemove} icon={React.cloneElement(CloseIcon)}/>}
                </div>
                <div className={classNames('body')}>
                    <div>ss</div>
                    <span>{React.cloneElement(RightIcon)}</span>
                </div>
            </div>
        </div>
        <AddActivityBox/>
    </ActivityStyled>
}