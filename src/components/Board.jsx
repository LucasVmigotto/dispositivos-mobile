import React from 'react'
import Square from './Square'
import { calculateWinner } from '../utils'

class Board extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xNext: true
    }
  }

  handleClick (i) {
    const squares = this.state.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xNext
      ? 'X'
      : 'O'
    this.setState({
      squares,
      xNext: !this.state.xNext
    })
  }

  randomMove () {
    if (calculateWinner(this.state.squares)) {
      return
    }
    const squares = this.state.squares.slice()
    const empty = this.state.squares.reduce(
      (prv, crr, idx) => !crr
        ? [ ...prv, idx]
        : prv, [])
    const index = Math.floor(
      Math.random() * (empty.length - 0))
    squares[empty[index]] = this.state.xNext
      ? 'X'
      : 'O'
    this.setState({
      squares: squares,
      xNext: !this.state.xNext
    })
  }

  renderSquare (i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    )
  }

  resetGame () {
    this.setState({
      squares: Array(9).fill(null)
    })
  }

  render () {
    const winner = calculateWinner(this.state.squares)
    let status
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' +
        (this.state.xNext
          ? 'X'
          : 'O'
        );
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div>
          <button onClick={() => {this.resetGame()}}>
            Reset
          </button>
          <button onClick={() => {this.randomMove()}}>
            Random Move
          </button>
        </div>
      </div>
    )
  }
}

export default Board
