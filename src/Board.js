import React from "react";
import Table from "./Table";

function Board(props) {
    return (
        <Table
            height={props.height}
            width={props.width}
            className="Board"
            cellType="puzzle"
            onClick={props.onClick}
            values={props.values}/>
    );
}

export default Board;