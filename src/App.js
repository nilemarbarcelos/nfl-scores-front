import React, { Component } from 'react';
import logo from './logo.svg';
import { MuiThemeProvider } from 'material-ui';
import Week from './components/Week';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Week />
      </MuiThemeProvider>
    );
  }
}

export default App;
