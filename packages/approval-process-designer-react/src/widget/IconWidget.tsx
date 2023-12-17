import React, {FC, MouseEventHandler} from "react";
import styled from "@emotion/styled";
import classNames from "classnames";

const IconWidgetStyled = styled('span')({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    'svg': {
        width: '1em',
        height: '1em'
    }
})

type IconWidgetProps = {
    icon?: React.JSX.Element;
    className?: string;
    onClick?: (e: any) => void;
}
export const IconWidget: FC<IconWidgetProps> = ({icon, className, onClick}) => {
    return <>{icon &&
        <IconWidgetStyled className={classNames(`td-icon`, className)}
                          onClick={onClick}>{React.cloneElement(icon)}</IconWidgetStyled>}</>
}