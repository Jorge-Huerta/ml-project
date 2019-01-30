import React, {Component} from "react";
import {Container, Grid} from "semantic-ui-react";
import NavBar from "components/containers/NavBar";
import LoginForm from "components/containers/LoginForm";

class Login extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <Grid centered columns={1}>
          <Grid.Row>
            <LoginForm />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Login;
