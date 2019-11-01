/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEngineer } from '../../actions/engineerList';

class SearchDropDown extends Component {
  handleClick = ({ target }) => {
    const { addEngineer, hideList } = this.props;
    const engineer = { name: target.textContent, id: target.attributes.userid.value };
    addEngineer(engineer);
    hideList();
  }

  render() {
    const { users } = this.props;
    return (
      <div className="drop-down">
        {users.map((user) => <label onClick={this.handleClick} className="drop-down-user" userid={user.id} key={user.id}>{user.name}</label>)}
      </div>
    );
  }
}
SearchDropDown.propTypes = {
  users: PropTypes.array.isRequired,
  addEngineer: PropTypes.func.isRequired,
  hideList: PropTypes.func.isRequired,
};

export default connect(null, { addEngineer })(SearchDropDown);
