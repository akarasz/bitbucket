import React from "react";
import Board from "./Board";
import {BottomHints, LeftHints, RightHints, TopHints} from "./Hints";
import './Bitpuzzle.css';
import {transpose} from "./matrix";

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
        .map(v => v.length);
}

function generateRandomBoard(width, height, density) {
    const trueValues = Math.round(width * height * density);
    const falseValues = width * height - trueValues;

    const result = new Array(trueValues).fill(true).concat(new Array(falseValues).fill(false));

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function hintsToString(hints) {
    return hints.map(row => row.join(',')).join(';');
}

class Bitpuzzle extends React.Component {

    constructor(props) {
        super(props);

        const width = props.width;
        const height = props.height;
        const density = props.density;

        this.handleClickOnPuzzle = this.handleClickOnPuzzle.bind(this);

        const generatedPuzzle = generateRandomBoard(width, height, density);

        this.state = {
            board: new Array(width * height).fill(false),
            horizontalHints: calculateHints(generatedPuzzle, height, width),
            verticalHints: calculateHints(transpose(generatedPuzzle, width, height), width, height),
        };
    }

    handleClickOnPuzzle(i) {
        const board = this.state.board.slice();

        const width = this.props.width;
        const height = this.props.height;

        board[i] = !board[i];

        const isHorizontalCorrect = hintsToString(this.state.horizontalHints) === hintsToString(calculateHints(board, height, width));
        const isVerticalCorrect = hintsToString(this.state.verticalHints) === hintsToString(calculateHints(transpose(board, width, height), width, height));

        if (isHorizontalCorrect && isVerticalCorrect) {
            console.log("DONE");
        }

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
                                width={this.props.width} height={this.props.height}
                                values={this.state.verticalHints}/>
                        </td>
                        <td/>
                    </tr>
                    <tr>
                        <td>
                            <LeftHints
                                width={this.props.width} height={this.props.height}
                                values={this.state.horizontalHints}/>
                        </td>
                        <td>
                            <Board
                                width={this.props.width} height={this.props.height}
                                onClick={this.handleClickOnPuzzle}
                                values={this.state.board}/>
                        </td>
                        <td>
                            <RightHints
                                width={this.props.width} height={this.props.height}
                                values={this.state.horizontalHints}/>
                        </td>
                    </tr>
                    <tr>
                        <td/>
                        <td>
                            <BottomHints
                                width={this.props.width} height={this.props.height}
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