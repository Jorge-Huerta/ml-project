import React, {Component} from "react";
import {Container, Grid} from "semantic-ui-react";
import HeaderComponent from "components/presentationals/HeaderComponent";
import SignupForm from "components/containers/SignupForm";

class Signup extends Component {
  render() {
    return (
      <Container>
        <HeaderComponent />
        <Grid centered columns={1}>
          <Grid.Row>
            <SignupForm />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Signup;
