import React from "react"
import styled from "@emotion/styled";

const EndActivityStyled = styled('div')({

    '&.end-activity': {
        borderRadius: '50%',
        fontSize: '14px',
        color: `rgba(25, 31, 37, 0.4)`,
        '.end-activity-circle': {
            width: '10px',
            height: '10px',
            margin: 'auto',
            borderRadius: '50%',
            background: '#DBDCDC'
        },
        '.end-activity-text': {
            marginTop: '5px',
            textAlign: 'center'
        }
    }

})

export const EndActivity = () => {
    return <EndActivityStyled className={`end-activity`}>
        <div className={`end-activity-circle`}/>
        <div className={`end-activity-text`}>流程结束</div>
    </EndActivityStyled>
}