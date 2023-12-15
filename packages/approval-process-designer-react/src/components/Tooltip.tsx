import React, {FC} from "react"
import styled from "@emotion/styled";

const TooltipStyled = styled('div')({
    position: 'absolute'
})

type TooltipProps = {
    title: React.ReactNode
}

export const Tooltip: FC<TooltipProps> = ({
                                              title
                                          }) => {
    return <TooltipStyled className={`td-tooltip`}>
        <div className={`td-tooltip-content`}>
            <div className={`td-tooltip-inner`}>
                {title}
            </div>
        </div>
    </TooltipStyled>
}