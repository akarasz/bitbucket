import React from "react";
import {cellTypes} from "./Cell";

class Table extends React.Component {
    renderRows = (totalRows, totalCols, valuesArray = new Array(totalRows * totalCols), clickHandler = () => {}) => {
        const Cell = cellTypes[this.props.cellType]

        let rows = [];

        for (let j = 0; j < totalRows; j++) {
            let cols = [];

            for (let i = 0; i < totalCols; i++) {
                const idx = j * totalCols + i;

                cols.push(
                    <Cell
                        key={idx}
                        value={valuesArray[idx]}
                        onClick={() => clickHandler(idx)} />
                );
            }

            rows.push(<tr key={'row' + j}>{cols}</tr>)
        }

        return rows;
    }

    render() {
        return (
            <table className={this.props.className}>
                <tbody>{this.renderRows(
                    this.props.height,
                    this.props.width,
                    this.props.values,
                    this.props.onClick,
                )}</tbody>
            </table>
        )
    }
}

export default Table;