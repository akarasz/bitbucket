import React from "react";
import Board from "./Board";
import {BottomHints, LeftHints, RightHints, TopHints} from "./Hints";
import './Bitpuzzle.css';

export const WIDTH = 5;
export const HEIGHT = 5;

class Bitpuzzle extends React.Component {
    constructor(props) {
        super(props);

        this.handleClickOnPuzzle = this.handleClickOnPuzzle.bind(this);

        this.state = {
            board: new Array(HEIGHT * WIDTH).fill(false),
            horizontalHints: new Array(HEIGHT).fill([]),
        };
    }

    handleClickOnPuzzle(i) {
        const board = this.state.board.slice();

        board[i] = !board[i];

        const horizontalHints = this.calculateHorizontalHints(board);

        this.setState({
            board: board,
            horizontalHints: horizontalHints,
        });
    }

    calculateHorizontalHints(board) {
        return new Array(HEIGHT)
            .fill([])
            .map((row, i) =>
                board.slice(WIDTH * i, WIDTH * i + WIDTH)
                    .map(v => v ? '1': '0')
                    .join('')
                    .split('0')
                    .filter(v => v !== '')
                    .map(v => v.length)
            );
    }

    render() {
        return (
            <div>
                <table className="Bitpuzzle">
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

export default Bitpuzzle;;