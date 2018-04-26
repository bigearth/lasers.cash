import React, { Component } from 'react';

import './App.css';
let BITBOXCli = require('bitbox-cli/lib/bitboxcli').default;
let BITBOX = new BITBOXCli({
  protocol: 'http',
  host: '127.0.0.1',
  port: 8332,
  username: '',
  password: '',
  corsproxy: false
});


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <div className="pure-g">
          <div className="pure-u-1-2">
            <div className="l-box">
              <img src='./logo.png' className="App-logo" alt="logo" />
              <h1 className="App-title">BITBOX</h1>
            </div>
          </div>
          <div className="pure-u-1-2">
            <div className="l-box">
              <img src='./logo.png' className="App-logo" alt="logo" />
              <h1 className="App-title">BITBOX</h1>
            </div>
          </div>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-2">
            <div className="l-box">
              <img src='./logo.png' className="App-logo" alt="logo" />
              <h1 className="App-title">BITBOX</h1>
            </div>
          </div>
          <div className="pure-u-1-2">
            <div className="l-box">
              <img src='./logo.png' className="App-logo" alt="logo" />
              <h1 className="App-title">BITBOX</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
