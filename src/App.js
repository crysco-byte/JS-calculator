import React from 'react';
import './App.css'
/* eslint no-eval: 0 */
const operatorReplacement = {
  '/*': '*',
  '*/': '/',
  '++': '+',
  '+-': '-',
  '-+': '+',
  '/+': '+',
  '+/': '/',
  '-/': '/',
  '+*': '*',
  '-*': '*',
  '--': '-',
  '**': '*',
  '*-': '*-',
}
class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "0",
      prevInput: "",
      initialState: true,
      evaluated: false
    }
    this.handleNumber = this.handleNumber.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleEvaluation = this.handleEvaluation.bind(this);
    this.handleZero = this.handleZero.bind(this);
  }
  handleZero(e) {
    e.preventDefault();
    if (this.state.initialState === true){
    }else{
      this.setState({
        input: this.state.input + e.target.value,
        prevInput: e.target.value
      })
    }
  }
  handleNumber(e) {
    e.preventDefault();
    if(this.state.initialState === true || this.state.evaluated === true){
      this.setState({
        input: e.target.value,
        initialState: false,
        evaluated: false
      })
    }else {
      this.setState({
        input: this.state.input + e.target.value,
        prevInput: e.target.value,
        initialState: false,
        display: this.state.input
      })
    }
  }
  handleOperator(e) {
    e.preventDefault();
    if (this.state.prevInput === "+" || this.state.prevInput === "-" || this.state.prevInput === "*" || this.state.prevInput === "/") {
      const opReplacementValue = this.state.prevInput + e.target.value;
      this.setState({
        input: this.state.input.replace(/.$/, operatorReplacement[opReplacementValue]),
        prevInput: e.target.value
      })
    } else if(this.state.evaluated === true) {
      this.setState({
        evaluated: false,
        input: this.state.input + e.target.value,
        prevInput: e.target.value
      })
    } else {
      this.setState({
        input: this.state.input + e.target.value,
        prevInput: e.target.value
      })
    }
  }
  handleClear(e) {
    e.preventDefault();
    this.setState({
      input: "0",
      initialState: true
    })
  }
  handleDecimal(e) {
    e.preventDefault();
    if (this.state.prevInput === ".") {
    } else {
      this.setState({
        input: this.state.input + e.target.value,
        prevInput: e.target.value 
      })
    }
  }
  handleEvaluation(e) {
    e.preventDefault();
    this.setState({
      input: eval(this.state.input),
      prevInput: "",
      evaluated: true
    })
  }
  render() {
    return(
      <div className="Calc">
        <form onSubmit={this.handleEvaluation}>
          <div className="row" id="display-container">
            <h1 id="display">{this.state.input}</h1>
          </div>

          <div className="row">
            <button className="clear" id="clear" onClick={this.handleClear}>C</button>
            <button className="operator" id="divide" onClick={this.handleOperator} value="/">/</button>
          </div>

          <div className="row">
            <button id="seven" onClick={this.handleNumber} value="7">7</button>
            <button id="eight" onClick={this.handleNumber} value="8">8</button>
            <button id="nine" onClick={this.handleNumber} value="9">9</button>
            <button className="operator" id="multiply" onClick={this.handleOperator} value="*">*</button>
          </div>

          <div className="row">
            <button  id="four" onClick={this.handleNumber} value="4">4</button>
            <button  id="five" onClick={this.handleNumber} value="5">5</button>
            <button  id="six" onClick={this.handleNumber} value="6">6</button>
            <button className="operator" id="subtract" onClick={this.handleOperator} value="-">-</button>
          </div>

          <div className="row">
            <button  id="one" onClick={this.handleNumber} value="1">1</button>
            <button  id="two" onClick={this.handleNumber} value="2">2</button>
            <button  id="three" onClick={this.handleNumber} value="3">3</button>
            <button className="operator" id="add" onClick={this.handleOperator} value="+">+</button>
          </div>

          <div className="row">
            <button id="zero" onClick={this.handleZero} value="0">0</button>
            <button className="operator" value="." id="decimal" onClick={this.handleDecimal}>.</button>
            <button type="submit" id="equals">=</button>
          </div>
        </form>
      </div>
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
