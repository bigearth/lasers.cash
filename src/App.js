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
    let langs = [32];
    let v = langs[Math.floor(Math.random()*langs.length)];
    console.log(v)

    return (
      <div className="App">
        <div className="pure-g">
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
            <div className={`l-box background-${v}-a`}>
              <i className={`logo fas fa-cube foreground-${v}-a`} />
              <h1 className={`App-title foreground-${v}-a`}>BITBOX</h1>
            </div>
          </div>
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
            <div className={`l-box background-${v}-b`}>
              <i className={`logo fas fa-cube foreground-${v}-b`} />
              <h1 className={`App-title foreground-${v}-b`}>BITBOX</h1>
            </div>
          </div>
        </div>
        <div className="pure-g">
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
            <div className={`l-box background-${v}-c`}>
              <i className={`logo fas fa-cube foreground-${v}-c`} />
              <h1 className={`App-title foreground-${v}-c`}>BITBOX</h1>
            </div>
          </div>
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
            <div className={`l-box background-${v}-d`}>
              <i className={`logo fas fa-cube foreground-${v}-d`} />
              <h1 className={`App-title foreground-${v}-d`}>BITBOX</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
