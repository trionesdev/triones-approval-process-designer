import React, {FC} from "react"
import {RouteBranches} from "./RouteBranches";
import styled from "@emotion/styled";

const RouteActivityStyled = styled('div')({
    display: 'flex',
    overflow: 'visible',
    minWidth: '220px',
    minHeight: '180px',
    height: 'auto',
    borderBottom: '2px solid #cccccc',
    borderTop: '2px solid #cccccc',
    position: 'relative',
    marginTop: '15px',
    '.add-branch': {
        border: 'none',
        outline: 'none',
        userSelect: 'none',
        justifyContent: 'center',
        fontSize: '12px',
        padding: '0 10px',
        height: '30px',
        lineHeight: '30px',
        borderRadius: '15px',
        color: '#0089FF',
        background: '#fff',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        position: 'absolute',
        top: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
        transformOrigin: 'center center',
        cursor: 'pointer',
        zIndex: 1,
        display: 'inline-flex',
        alignItems: 'center',
        transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'

    }
})

type RouteActivityProps = {
    children?: React.ReactNode,
    nextActivity?: React.ReactNode,
}

export const RouteActivity: FC<RouteActivityProps> = ({children, nextActivity}) => {
    return <>
        <RouteBranches>
            <RouteActivityStyled className={`route-activity`}>
                <button className={`add-branch`}>添加条件</button>
                {children}
            </RouteActivityStyled>
        </RouteBranches>
        {nextActivity}
    </>
}