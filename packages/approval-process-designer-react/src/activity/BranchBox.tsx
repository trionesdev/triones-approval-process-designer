import styled from "@emotion/styled";
import React, {FC} from "react";
import classNames from "classnames";

const coverLineColor = '#F0F2F5'
const BranchBoxStyled = styled('div')({
    backgroundColor: coverLineColor,
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    '&::before': {
        content: '" "',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        margin: 'auto',
        width: '2px',
        height: '100%',
        backgroundColor: `#CACACA`
    },
    '.top-left-cover-line': {
        position: 'absolute',
        height: '3px',
        width: '50%',
        backgroundColor: coverLineColor,
        top: '-2px',
        left: '-1px',
    },
    '.bottom-left-cover-line': {
        position: 'absolute',
        height: '3px',
        width: '50%',
        backgroundColor: coverLineColor,
        bottom: '-2px',
        left: '-1px',
    },
    '.top-right-cover-line': {
        position: 'absolute',
        height: '3px',
        width: '50%',
        backgroundColor: coverLineColor,
        top: '-2px',
        right: '-1px',
    },
    '.bottom-right-cover-line': {
        position: 'absolute',
        height: '3px',
        width: '50%',
        backgroundColor: coverLineColor,
        bottom: '-2px',
        right: '-1px',
    },
})

type BranchBoxProps = {
    children?: React.ReactNode | React.ReactNode[] | any,
    firstCol?: boolean,
    lastCol?: boolean
}

export const BranchBox: FC<BranchBoxProps> = ({
                                           children,
                                           firstCol,
                                           lastCol,
                                       }) => {
    return <BranchBoxStyled>
        {firstCol && <>
            <div className={classNames(`top-left-cover-line`)}/>
            <div className={classNames(`bottom-left-cover-line`)}/>
        </>}
        {lastCol && <>
            <div className={classNames(`top-right-cover-line`)}/>
            <div className={classNames(`bottom-right-cover-line`)}/>
        </>}
        {children}
    </BranchBoxStyled>
}