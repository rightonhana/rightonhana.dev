import React, { Component } from 'react';
import './App.css';
import IconLinks from "./components/IconLinks";
import { links } from "./links";
import { Logo } from './components/Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo/>
        <IconLinks links={links}/>
      </div>
    );
  }
}

export default App;
