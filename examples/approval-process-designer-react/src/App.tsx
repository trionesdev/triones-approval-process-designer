import React from 'react';
import './App.css';
import {
    Activity,
    ActivityProps, ConditionActivity,
    EndActivity,
    ProcessNode,
    RouteActivity
} from "@trionesdev/approval-process-designer-react";

function App() {

    const processNode = new ProcessNode({
        id: '1',
        type: 'START',
        title: 'Start',
    })

    const s: ActivityProps = {
        processNode: processNode
    }

    return (
        <>

        </>
    );
}

export default App;
