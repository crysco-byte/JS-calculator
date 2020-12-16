import React from 'react';

/* eslint no-eval: 0 */

const numbers = [{
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
const symbols = [{
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

// CHECK THE LAST TWO OPERATORS AND IF IT IS IN THE REGEX RETURN THE E.VALUE

const operatorReplacement = {
  '/*': '*',
  '*/': '/',
  '++': '+',
  '+-': '-',
  '-+': '+',
  '/+': '+',
  '+/': '/',
  '-/': '/',
  '..': '.'
}

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '0',
      evaluated: false
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    e.preventDefault();
    const lastTwo = this.state.input[this.state.input.length - 1] + e.target.value;
    if (lastTwo in operatorReplacement) {
      this.setState({
        input: this.state.input.replace(this.state.input[this.state.input.length - 1], operatorReplacement[lastTwo])
      })
    } else if (
      this.state.input[this.state.input[0]] === '0'
    ) {
      this.setState({
        input: e.target.value
      })
    } else if (this.state.evaluated === true) {
      this.setState({
        input: e.target.value,
        evaluated: false
      })
    } else {
      this.setState({
        input: this.state.input + e.target.value
      })
    }
  }
  handleClear(e) {
    e.preventDefault();
    this.setState({
      input: '0'
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      input: eval(this.state.input),
      evaluated: true
    })
  }
  render() {
    return ( <
      div >
      <
      h1 id = 'display' > {
        this.state.input
      } < /h1> <
      form onSubmit = {
        this.handleSubmit
      } > {
        numbers.map(
          i => < button value = {
            i.number
          }
          onClick = {
            this.handleInput
          }
          id = {
            i.id
          } > {
            i.number
          } <
          /button>
        )
      } {
        symbols.map(
          i => < button id = {
            i.id
          }
          value = {
            i.symbol
          }
          onClick = {
            this.handleInput
          } > {
            i.symbol
          } <
          /button>
        )
      } <
      button id = 'clear'
      onClick = {
        this.handleClear
      } >
      C <
      /button> <
      button type = 'submit'
      id = 'equals' > = <
      /button> < /
      form > <
      /div>
    )
  }
}


function App() {
  return ( <
    div className = "App" >
    <
    Calc / >
    <
    /div>
  );
}

export default App;
