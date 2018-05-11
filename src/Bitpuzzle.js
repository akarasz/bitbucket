import React from "react";
import Board from "./Board";
import {BottomHints, LeftHints, RightHints, TopHints} from "./Hints";
import './Bitpuzzle.css';
import {transpose} from "./matrix";

export const WIDTH = 10;
export const HEIGHT = 5;

function calculateHints(board, totalRows, rowLength) {
    return new Array(totalRows)
        .fill([])
        .map((row, i) => calculateRow(board, i, rowLength));
}

function calculateRow(board, rowIndex, rowLength) {
    return board.slice(rowLength * rowIndex, rowLength * rowIndex + rowLength)
        .map(v => v ? '1': '0')
        .join('')
        .split('0')
        .filter(v => v !== '')
        .map(v => v.length)
}

class Bitpuzzle extends React.Component {
    constructor(props) {
        super(props);

        this.handleClickOnPuzzle = this.handleClickOnPuzzle.bind(this);

        this.state = {
            board: new Array(HEIGHT * WIDTH).fill(false),
            horizontalHints: new Array(HEIGHT).fill([]),
            verticalHints: new Array(WIDTH).fill([]),
        };
    }

    handleClickOnPuzzle(i) {
        const board = this.state.board.slice();

        board[i] = !board[i];

        const horizontalHints = calculateHints(board, HEIGHT, WIDTH);
        const verticalHints = calculateHints(transpose(board, WIDTH, HEIGHT), WIDTH, HEIGHT);

        this.setState({
            board: board,
            horizontalHints: horizontalHints,
            verticalHints: verticalHints,
        });
    }

    render() {
        return (
            <div>
                <table className="Bitpuzzle">
                    <tbody>
                    <tr>
                        <td/>
                        <td>
                            <TopHints
                                values={this.state.verticalHints}/>
                        </td>
                        <td/>
                    </tr>
                    <tr>
                        <td>
                            <LeftHints
                                values={this.state.horizontalHints}/>
                        </td>
                        <td>
                            <Board
                                onClick={this.handleClickOnPuzzle}
                                values={this.state.board}/>
                        </td>
                        <td>
                            <RightHints
                                values={this.state.horizontalHints}/>
                        </td>
                    </tr>
                    <tr>
                        <td/>
                        <td>
                            <BottomHints
                                values={this.state.verticalHints}/>
                        </td>
                        <td/>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Bitpuzzle;