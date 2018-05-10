import React from "react";

class PuzzleCell extends React.Component {
    render() {
        return (
            <td
                onClick={this.props.onClick}
                className={'Cell' + (this.props.value ? ' Cell-selected' : '')}>
            </td>
        );
    }
}

export default PuzzleCell;