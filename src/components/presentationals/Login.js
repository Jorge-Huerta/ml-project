import React, {Component} from "react";
import {Container, Grid} from "semantic-ui-react";
import HeaderComponent from "components/presentationals/HeaderComponent";
import LoginForm from "components/containers/LoginForm";

class Login extends Component {
  render() {
    return (
      <Container>
        <HeaderComponent />
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
