import React, { useState } from 'react';

const numbers = [
  {
    number: 1,
    id: 'one'
  },
  {
    number: 2,
    id: 'two'
  },
  {
    number: 3,
    id: 'three'
  },
  {
    number: 4,
    id: 'four'
  }, {
    number: 5,
    id: 'five'
  },
  {
    number: 6,
    id: 'six'
  }, {
    number: 7,
    id: 'seven'
  },
  {
    number: 8,
    id: 'eight'
  }, {
    number: 9,
    id: 'nine'
  },
  {
    number: 0,
    id: 'zero'
  }
]
const symbols = [
  {
    symbol: '-',
    id: 'subtract'
  },
  {
    symbol: '/',
    id: 'devide'
  }, {
    symbol: '+',
    id: 'add'
  }, {
    symbol: '*',
    id: 'multiply'
  }, {
    symbol: '.',
    id: 'decimal'
  },
]

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: []
    }
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    this.setState({
      input: e.target.value.concat(this.state.input)
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.input}</h1>
        {numbers.map(
          i => <button
            id={i.id}
            onClick={this.handleInput}
            value={i.number}
          >{i.number}
          </button>
        )}
      {symbols.map(
        i => <button
        id={i.id}
        onClick={this.handleInput}
        value={i.symbol}
        >
          {i.symbol}
        </button>
      )}
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Calc />
    </div>
  );
}

export default App;
