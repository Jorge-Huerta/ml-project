import React, {Component} from "react";
import {Header, Container, Grid} from "semantic-ui-react";
import NavBar from "components/containers/NavBar";

class HeaderComponent extends Component {
  render() {
    return (
      <Container>
        <Header>
          <NavBar />
        </Header>
      </Container>
    );
  }
}

export default HeaderComponent;
