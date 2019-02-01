import React, {Component} from "react";
import {Header, Container, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: ""
    };
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name});

  render() {
    const {activeItem} = this.state;

    return (
      <Container>
        <Menu size="large">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          >
            Home
          </Menu.Item>
          <Menu.Item
            name="login"
            active={activeItem === "login"}
            onClick={this.handleItemClick}
            as={Link}
            to="/Login"
          >
            Login
          </Menu.Item>
          <Menu.Item
            name="signup"
            active={activeItem === "signup"}
            onClick={this.handleItemClick}
            as={Link}
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
