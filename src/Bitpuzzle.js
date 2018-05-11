import React from "react";
import Board from "./Board";
import {BottomHints, LeftHints, RightHints, TopHints} from "./Hints";
import './Bitpuzzle.css';
import {transpose} from "./matrix";

export const WIDTH = 5;
export const HEIGHT = 5;
export const DENSITY = .5;

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

function generateRandomBoard() {
    const trueValues = Math.round(WIDTH * HEIGHT * DENSITY);
    const falseValues = WIDTH * HEIGHT - trueValues;

    const result = new Array(trueValues).fill(true).concat(new Array(falseValues).fill(false));

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

class Bitpuzzle extends React.Component {
    constructor(props) {
        super(props);

        this.handleClickOnPuzzle = this.handleClickOnPuzzle.bind(this);

        const generatedPuzzle = generateRandomBoard();

        this.state = {
            board: new Array(HEIGHT * WIDTH).fill(false),
            horizontalHints: calculateHints(generatedPuzzle, HEIGHT, WIDTH),
            verticalHints: calculateHints(transpose(generatedPuzzle, WIDTH, HEIGHT), WIDTH, HEIGHT),
        };
    }

    handleClickOnPuzzle(i) {
        const board = this.state.board.slice();

        board[i] = !board[i];

        this.setState({
            board: board,
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