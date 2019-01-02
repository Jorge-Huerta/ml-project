import React, {Component} from "react";
import {Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div class="ui menu">
        <div class="header item">Home</div>
        <div class="item">Login</div>
      </div>
    );
  }
}

export default NavBar;
