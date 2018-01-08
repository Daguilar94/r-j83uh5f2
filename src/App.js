import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.update = this.update.bind(this)
    this.state = {
      value: '',
      length: 0
    }
  }
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.update}>{this.state.value}</textarea>
        <div className="counter">{this.state.length}</div>
      </div>
    );
  }

  update(event) {
    this.setState({
      value: event.target.value,
      length: event.target.value.length
    })
  }
}

export default App;
