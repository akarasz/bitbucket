import React from "react";

function HintCell() {
    return (<td className="Cell"/>)
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