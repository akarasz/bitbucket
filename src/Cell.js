import React from "react";
import './Cell.css';

function HintCell(props) {
    return (<td className="Cell">{props.value}</td>);
}

function PuzzleCell(props) {
    return (
        <td
            onClick={props.onClick}
            className={'Cell' + (props.value ? ' Cell-selected' : '')}>
        </td>
    );
}

export const cellTypes = {
    puzzle: PuzzleCell,
    hint: HintCell
};

export { HintCell, PuzzleCell }