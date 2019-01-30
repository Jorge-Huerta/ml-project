import React, {Component} from "react";
import {Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item header as={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/Login">
          Login
        </Menu.Item>
        <Menu.Item as={Link} to="/Signup">
          Signup
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;
