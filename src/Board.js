import {HEIGHT, WIDTH} from "./Bitpuzzle";
import React from "react";
import Table from "./Table";

function Board(props) {
    return <Table
        height={HEIGHT}
        width={WIDTH}
        className="Puzzle"
        cellType="puzzle"
        onClick={props.onClick}
        values={props.values}
    />;
}

export default Board;