import React, { Component } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetMenu = this.resetMenu.bind(this);
  }

  handleClick() {
    this.state.menuVisible
      ? this.setState({ menuVisible: false })
      : this.setState({ menuVisible: true });
  }

  resetMenu() {
    this.setState({ menuVisible: false });
  }

  render() {
    return (
      <div className="site">
        <Header
          menuVisible={this.state.menuVisible}
          handleClick={this.handleClick}
        />
        <Main resetMenu={this.resetMenu} />
        <Footer />
      </div>
    );
  }
}

export default App;
