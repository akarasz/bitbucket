import {HEIGHT, WIDTH} from "./Bitpuzzle";
import React from "react";
import Table from "./Table";

function HorizontalHints() {
    return <Table
        height={HEIGHT}
        width={Math.ceil(WIDTH / 2)}
        className="Hints"
        cellType="hint"/>;
}

function LeftHints() {
    return <HorizontalHints/>;
}

function RightHints() {
    return <HorizontalHints/>;
}


function VerticalHints() {
    return <Table
        height={Math.ceil(HEIGHT / 2)}
        width={WIDTH}
        className="Hints"
        cellType="hint"/>;
}

function TopHints() {
    return <VerticalHints/>;
}

function BottomHints() {
    return <VerticalHints/>;
}

export { LeftHints, RightHints, TopHints, BottomHints }