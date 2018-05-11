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
    const values = props.values
        .map(row => new Array(Math.ceil(WIDTH / 2 - row.length)).concat(row))
        .reduce((r, v) => r.concat(v), []);

    return (
        <HorizontalHints
            values={values}/>
    );
}

function RightHints(props) {
    const values = props.values
        .map(row => row.concat(new Array(Math.ceil(WIDTH / 2 - row.length))))
        .reduce((r, v) => r.concat(v), []);

    return (
        <HorizontalHints
            values={values}/>
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