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
            horizontalHints: new Array(HEIGHT * (Math.ceil(WIDTH / 2))).fill(3),
        };
    }

    handleClickOnPuzzle(i) {
        const board = this.state.board.slice();

        board[i] = !board[i];

        const horizontalHints = this.calculateHorizontalHints(board);
        console.log(horizontalHints);

        this.setState({
            board: board,
            horizontalHints: horizontalHints,
        });
    }

    calculateHorizontalHints(board) {
        let horizontalHints = [];

        for (let j = 0; j < HEIGHT; j++) {
            const rowHints = board.slice(WIDTH * j, WIDTH * j + WIDTH)
                .map(v => v ? '1': '0')
                .join('')
                .split('0')
                .filter(v => v !== '')
                .map(v => v.length);

            horizontalHints = horizontalHints.concat(rowHints);
            horizontalHints = horizontalHints.concat(new Array(Math.ceil(WIDTH / 2) - rowHints.length));
        }

        return horizontalHints;
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