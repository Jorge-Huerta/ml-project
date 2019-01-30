import React, {Component} from "react";
import {Form, Button} from "semantic-ui-react";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: ""
    };
  }

  onSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <Form>
        <Form.Input label="First name" type="text" />
        <Form.Input label="Last name" type="text" />
        <Form.Input label="Mail" type="Mail" />
        <Form.Input label="Username" type="text" />
        <Form.Input label="Password" type="password" />
        <Button color="black" control={Button} onClick={this.onSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default SignupForm;
