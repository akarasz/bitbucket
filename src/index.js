import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const WIDTH = 5;
const HEIGHT = 5;

class PuzzleCell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
    };
  }

  handleClick = () => {
    this.setState({
      isSelected: !this.state.isSelected,
    });
  }

  render() {
    return (
      <td
        onClick={this.handleClick}
        className={'Cell' + (this.state.isSelected ? ' Cell-selected' : '')}>
      </td>
    );
  }
}

function HintCell() {
  return (<td className="Cell" />)
}

function Puzzle() {
  return <Table
    height={HEIGHT}
    width={WIDTH}
    className="Puzzle"
    cellType="puzzle" />;
}

const cellTypes = {
  puzzle: PuzzleCell,
  hint: HintCell
}

function VerticalHints() {
  return <Table
    height={Math.ceil(HEIGHT / 2)}
    width={WIDTH}
    className="Hints"
    cellType="hint" />;
}

function HorizontalHints() {
  return <Table
    height={HEIGHT}
    width={Math.ceil(WIDTH / 2)}
    className="Hints"
    cellType="hint" />;
}

function TopHints() {
  return <VerticalHints />;
}

function BottomHints() {
  return <VerticalHints />;
}

function LeftHints() {
  return <HorizontalHints />;
}

function RightHints() {
  return <HorizontalHints />;
}

class Table extends React.Component {
  renderCols = (totalCols) => {
    const Cell = cellTypes[this.props.cellType];
    let cols = [];

    for (let i = 0; i < totalCols; i++) {
      cols.push(<Cell key={'td' + i} />);
    }

    return cols;
  }

  renderRows = (totalRows, totalCols) => {
    let rows = [];

    for (let i = 0; i < totalRows; i++) {
      rows.push(<tr key={'tr' + i}>{this.renderCols(totalCols)}</tr>)
    }

    return rows;
  }
  render() {
    return (
      <table className={this.props.className}>
        {this.renderRows(this.props.height, this.props.width)}
      </table>
    )
  }
}

class Bitpuzzle extends React.Component {
  render() {
    return (
      <div>
        <table className="Bitpuzzle-board">
          <tr>
            <td></td>
            <td><TopHints /></td>
            <td></td>
          </tr>
          <tr>
            <td><LeftHints /></td>
            <td><Puzzle /></td>
            <td><RightHints /></td>
          </tr>
          <tr>
            <td></td>
            <td><BottomHints /></td>
            <td></td>
          </tr>
        </table>
      </div>
    )
  }
}

ReactDOM.render(
  <Bitpuzzle />,
  document.getElementById('root')
);
