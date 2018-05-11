import {HEIGHT, WIDTH} from "./Bitpuzzle";
import React from "react";
import Table from "./Table";
import './Hints.css';

function HorizontalHints(props) {
    return (
        <Table
            height={HEIGHT}
            width={Math.ceil(WIDTH / 2)}
            className="Hints"
            cellType="hint"
            values={props.values}/>
    );
}

function LeftHints(props) {
    return (
        <HorizontalHints
            values={props.values}/>
    );
}

function RightHints(props) {
    return (
        <HorizontalHints
            values={props.values}/>
    );
}


function VerticalHints() {
    return (
        <Table
            height={Math.ceil(HEIGHT / 2)}
            width={WIDTH}
            className="Hints"
            cellType="hint"/>
    );
}

function TopHints() {
    return <VerticalHints/>;
}

function BottomHints() {
    return <VerticalHints/>;
}

export { LeftHints, RightHints, TopHints, BottomHints }