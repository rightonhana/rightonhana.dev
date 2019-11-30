import React, { Component } from "react";
import "./App.css";
import IconLinks from "./components/IconLinks";
import Logo from "./components/Logo";
import { links } from "./links";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo src="/roh.svg" alt="Florencia Gonzalez" size={18} />
        <IconLinks links={links} />
      </div>
    );
  }
}

export default App;
