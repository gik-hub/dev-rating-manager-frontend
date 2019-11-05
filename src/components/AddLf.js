/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import TextBox from "./shared/TextBox";
import Button from "./shared/Button";
import {
  createLF as createLFAction,
  clearData
} from "../actions/createLFAction";
import { fetchProfile } from '../actions/fetchProfile';
export class AddLf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getProfile();
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    const { createLF } = this.props;
    createLF({ email });
  }

  componentWillReceiveProps(nextProps) {
    const { status, clearData, profile, history } = nextProps;
    if(profile.success.data.role !== 'Super LF') {
      toast.error('Unauthorized Page', {
        position: toast.POSITION.TOP_RIGHT
      });
      history.push('/login');
    }
    if (status.success) {
      toast.success(status.success, {
        position: toast.POSITION.TOP_RIGHT
      });
      clearData();
    }
    if (status.error) {
      toast.error(status.error, {
        position: toast.POSITION.TOP_RIGHT
      });
      clearData();
    }
  }

  render() {
    return (
      <div className="form">
        <center>
          <h3 className="form-title">Add Learning Facilitator</h3>
        </center>
        <form onSubmit={this.handleSubmit}>
          <TextBox
            id="email"
            label="Email"
            type="email"
            name="email"
            placeholder="Input User Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Button id="addLF" value="Add" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({createLF, profile}) => ({
  status: createLF,
  profile
});

const mapDispatchToProps = dispatch => ({
  createLF: data => dispatch(createLFAction(data)),
  clearData: () => dispatch(clearData()),
  getProfile: () => dispatch(fetchProfile())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddLf);