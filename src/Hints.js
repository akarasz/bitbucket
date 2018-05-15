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
    const width = props.width;
    const height = props.height;

    return (
        <Table
            height={height}
            width={Math.ceil(width / 2)}
            className="Hints"
            cellType="hint"
            values={props.values}/>
    );
}

function LeftHints(props) {
    const width = props.width;
    const height = props.height;

    return (
        <HorizontalHints
            width={width} height={height}
            values={withZerosBefore(props.values, Math.ceil(width / 2))}/>
    );
}

function RightHints(props) {
    const width = props.width;
    const height = props.height;

    return (
        <HorizontalHints
            width={width} height={height}
            values={withZerosAfter(props.values, Math.ceil(width / 2))}/>
    );
}


function VerticalHints(props) {
    const width = props.width;
    const height = props.height;

    return (
        <Table
            height={Math.ceil(height / 2)}
            width={width}
            className="Hints"
            cellType="hint"
            values={props.values}/>
    );
}

function TopHints(props) {
    const width = props.width;
    const height = props.height;

    return (
        <VerticalHints
            width={width} height={height}
            values={transpose(withZerosBefore(props.values, Math.ceil(height / 2)), Math.ceil(height / 2), width)}/>
    );
}

function BottomHints(props) {
    const width = props.width;
    const height = props.height;

    return (
        <VerticalHints
            width={width} height={height}
            values={transpose(withZerosAfter(props.values, Math.ceil(height / 2)), Math.ceil(height / 2), width)}/>
    );
}

export { LeftHints, RightHints, TopHints, BottomHints }