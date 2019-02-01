import React, {Component} from "react";
import {Header, Container, Menu, Grid} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activeItem: ""
    };
  }

  handleClick = (e, {name}) => {
    this.setState({activeItem: name});
  };

  render() {
    const {activeItem} = this.state;

    return (
      <Container>
        <Menu size="large">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleClick}
            as={NavLink}
            exact
            to="/"
          >
            Home
          </Menu.Item>
          <Menu.Item
            name="login"
            active={activeItem === "login"}
            onClick={this.handleClick}
            as={NavLink}
            to="/Login"
          >
            Login
          </Menu.Item>
          <Menu.Item
            name="signup"
            active={activeItem === "signup"}
            onClick={this.handleClick}
            as={NavLink}
            to="/Signup"
          >
            Signup
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}

export default NavBar;
