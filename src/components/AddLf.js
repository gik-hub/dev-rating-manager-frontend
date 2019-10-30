import React, { Component } from "react";
import TextBox from "./shared/TextBox";
import Button from "./shared/Button";
class AddLf extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="form">
        <center>
          <h3 className="form-title">Add Learning Facilitator</h3>
        </center>
        <form onSubmit>
          <TextBox
            label="Email"
            type="email"
            name="email"
            placeholder="Input User Email"
            value={this.state.email}
            onChange={this.onChange}
          />
          <Button value="Add" />
        </form>
      </div>
    );
  }
}

export default AddLf;
