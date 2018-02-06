import React, { Component } from 'react';
import Button from './components/input.js';


class Input extends Component {
  render() {
    return (
      <div className="Input">
      	<input type="text" place-holder="Hello World"/>
      </div>
    );
  }
}

export default Input;
