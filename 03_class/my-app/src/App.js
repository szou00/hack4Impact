// import logo from './logo.svg';
// import './App.css';
import React from "react";

class App extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state = {
      startingString: "Hello",
      name: props.name,
      number: 0
    };
  }
  helloName = () =>
  {
    this.setState((prevstate) =>
    {
      return {
        startingString: prevstate.startingString + this.state.name
      }
    })
  }

  minusOne = () =>
  {
    this.setState((prevstate) =>
    {
      return {
        number: prevstate.number - 1
      }
    })
  }

  plusOne = () =>
  {
    this.setState((prevstate) =>
    {
      return {
        number: prevstate.number + 1
      }
    })
  }

  reset = () =>
  {
    this.setState((prevstate) =>
    {
      return {
        number: 0
      }
    })
  }
  
  render() 
  {
    return (
      <div>
        {/* <div>{this.state.startingString}</div> */}
        <div class="result">{this.state.number}</div>
        {/* <button onClick={this.helloName}>Hello</button> */}
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.plusOne}>+1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    )
  }

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
