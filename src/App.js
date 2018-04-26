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
            <div className="l-box background-a-1">
              <i className="logo fas fa-cube foreground-a-1" />
              <h1 className="App-title foreground-a-1">BITBOX</h1>
            </div>
          </div>
          <div className="pure-u-1-2">
            <div className="l-box background-a-2">
              <i className="logo fas fa-cube foreground-a-2" />
              <h1 className="App-title foreground-a-2">BITBOX</h1>
            </div>
          </div>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-2">
            <div className="l-box background-a-3">
              <i className="logo fas fa-cube foreground-a-3" />
              <h1 className="App-title foreground-a-3">BITBOX</h1>
            </div>
          </div>
          <div className="pure-u-1-2">
            <div className="l-box background-a-4">
              <i className="logo fas fa-cube foreground-a-4" />
              <h1 className="App-title foreground-a-4">BITBOX</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
