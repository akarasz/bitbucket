import React from "react";
import Board from "./Board";
import {BottomHints, LeftHints, RightHints, TopHints} from "./Hints";

export const WIDTH = 5;
export const HEIGHT = 5;

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
                            <Board
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

export default Bitpuzzle;