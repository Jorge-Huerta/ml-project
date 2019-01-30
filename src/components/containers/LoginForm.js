import React, {Component} from "react";
import {Form, Button} from "semantic-ui-react";

class LoginForm extends Component {
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
        <Form.Input label="Username" type="text" />
        <Form.Input label="Password" type="password" />
        <Button color="black" control={Button} onClick={this.onSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default LoginForm;
