import {HEIGHT, WIDTH} from "./Bitpuzzle";
import React from "react";
import Table from "./Table";
import './Hints.css';
import {transpose} from "./matrix";

function withZerosBefore(values, totalLength) {
    return values
        .map(row => new Array(Math.ceil(totalLength - row.length)).concat(row))
        .reduce((r, v) => r.concat(v), []);
}

function withZerosAfter(values, totalLength) {
    return values
        .map(row => row.concat(new Array(Math.ceil(totalLength - row.length))))
        .reduce((r, v) => r.concat(v), []);
}

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
            values={withZerosBefore(props.values, Math.ceil(WIDTH / 2))}/>
    );
}

function RightHints(props) {
    return (
        <HorizontalHints
            values={withZerosAfter(props.values, Math.ceil(WIDTH / 2))}/>
    );
}


function VerticalHints(props) {
    return (
        <Table
            height={Math.ceil(HEIGHT / 2)}
            width={WIDTH}
            className="Hints"
            cellType="hint"
            values={props.values}/>
    );
}

function TopHints(props) {
    console.log(props.values);
    console.log(withZerosBefore(props.values, Math.ceil(HEIGHT / 2)));
    console.log(transpose(withZerosBefore(props.values, Math.ceil(HEIGHT / 2)), Math.ceil(HEIGHT / 2), WIDTH));

    return (
        <VerticalHints
            values={transpose(withZerosBefore(props.values, Math.ceil(HEIGHT / 2)), Math.ceil(HEIGHT / 2), WIDTH)}/>
    );
}

function BottomHints(props) {
    return (
        <VerticalHints
            values={transpose(withZerosAfter(props.values, Math.ceil(HEIGHT / 2)), Math.ceil(HEIGHT / 2), WIDTH)}/>
    );
}

export { LeftHints, RightHints, TopHints, BottomHints }