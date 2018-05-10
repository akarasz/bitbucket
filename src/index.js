import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const WIDTH = 5;
const HEIGHT = 5;

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

function HintCell() {
    return (<td className="Cell"/>)
}

function Puzzle(props) {
    return <Table
        height={HEIGHT}
        width={WIDTH}
        className="Puzzle"
        cellType="puzzle"
        onClick={props.onClick}
        cellValues={props.values}
    />;
}

function VerticalHints() {
    return <Table
        height={Math.ceil(HEIGHT / 2)}
        width={WIDTH}
        className="Hints"
        cellType="hint"/>;
}

function HorizontalHints() {
    return <Table
        height={HEIGHT}
        width={Math.ceil(WIDTH / 2)}
        className="Hints"
        cellType="hint"/>;
}

function TopHints() {
    return <VerticalHints/>;
}

function BottomHints() {
    return <VerticalHints/>;
}

function LeftHints() {
    return <HorizontalHints/>;
}

function RightHints() {
    return <HorizontalHints/>;
}

class Table extends React.Component {
    renderRows = (totalRows, totalCols) => {
        let rows = [];

        for (let j = 0; j < totalRows; j++) {
            let cols = [];

            for (let i = 0; i < totalCols; i++) {
                const idx = j * WIDTH + i;

                if (this.props.cellType === 'puzzle') {
                    cols.push(
                        <PuzzleCell
                            key={idx}
                            value={this.props.cellValues[idx]}
                            onClick={() => this.props.onClick(idx)} />
                    );
                } else {
                    cols.push(
                        <HintCell
                            key={idx}/>
                    )
                }
            }

            rows.push(<tr key={'row' + j}>{cols}</tr>)
        }

        return rows;
    }

    render() {
        return (
            <table className={this.props.className}>
                <tbody>{this.renderRows(this.props.height, this.props.width)}</tbody>
            </table>
        )
    }
}

class Bitpuzzle extends React.Component {
    constructor(props) {
        super(props);

        this.handleClickOnPuzzle = this.handleClickOnPuzzle.bind(this);

        this.state = {
            puzzle: new Array(HEIGHT * WIDTH).fill(false),
        };
    }

    handleClickOnPuzzle(i) {
        const puzzle = this.state.puzzle.slice();
        puzzle[i] = !puzzle[i];

        this.setState({
            puzzle: puzzle,
        });
    }

    render() {
        return (
            <div>
                <table className="Bitpuzzle-board">
                    <tbody>
                        <tr>
                            <td/>
                            <td>
                                <TopHints/>
                            </td>
                            <td/>
                        </tr>
                        <tr>
                            <td>
                                <LeftHints/>
                            </td>
                            <td>
                                <Puzzle
                                    onClick={this.handleClickOnPuzzle}
                                    values={this.state.puzzle}
                                />
                            </td>
                            <td>
                                <RightHints/>
                            </td>
                        </tr>
                        <tr>
                            <td/>
                            <td>
                                <BottomHints/>
                            </td>
                            <td/>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

ReactDOM.render(
    <Bitpuzzle/>,
    document.getElementById('root')
);
