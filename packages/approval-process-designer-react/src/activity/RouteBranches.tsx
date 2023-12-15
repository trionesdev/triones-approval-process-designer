import styled from "@emotion/styled";
import React, {FC} from "react";
import {AddActivityBox} from "./AddActivityBox";

const RouteBranchesStyled = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    minHeight: '270px',
    width: '100%',
    flexShrink: 0,
})

type RouteBranchesProps = {
    children?: React.ReactNode
}

export const RouteBranches: FC<RouteBranchesProps> = ({children}) => {
    return <RouteBranchesStyled className={`route-branches`}>
        {children}
        <AddActivityBox/>
    </RouteBranchesStyled>
}