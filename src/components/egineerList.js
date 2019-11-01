/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchDropDown from './shared/SearchDropDown';
import Engineer from './engineer';
import {
  myEngineers, deleteEngineer, replaceEngineer, saveEngineers, getUsers,
} from '../actions/engineerList';

export class EngineerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localUsers: [],
    };
  }

  componentDidMount() {
    const { myEngineers, getUsers, users } = this.props;
    myEngineers();
    if (users.length === 0) getUsers();
  }

  handleRedirect = () => {
    const { history } = this.props;
    history.push('/login');
  }

  handleRedirect = () => {
    const { history } = this.props;
    history.push('/login');
  }

  handleRedirect = () => {
    const { history } = this.props;
    history.push('/login');
  }

  handleDelete = (user) => {
    const { deleteEngineer } = this.props;
    deleteEngineer(user);
  }

  handleReplacing = (user) => {
    const { replaceEngineer } = this.props;
    replaceEngineer(user);
  }

  handleSaving = (users) => {
    const { saveEngineers } = this.props;
    saveEngineers(users);
  }

  search = (e) => {
    const slug = e.target.value.trim().split(' ');
    if (slug[0] !== '') {
      const allUsers = [...this.props.users];
      const found = allUsers.filter((oneUser) => {
        const fullNames = oneUser.name.toLowerCase();
        const slugPart = slug[0].toLowerCase();
        return fullNames.search(slugPart) !== -1;
      });
      this.setState({ localUsers: found });
    } else {
      this.setState({ localUsers: [] });
    }
  };

 handleDropdownClick = async () => {
   this.setState({ localUsers: [] });
 }

 render() {
   const { engineers } = this.props;
   const { localUsers } = this.state;
   if (engineers.isLoggedOut === true) {
     this.handleRedirect();
   }
   return (
     <>
       <div className="container">
         <main>
           <div className="main-wrapper">
             <div className="top">
               <h2>Edit My Developers</h2>
             </div>
             <div className="relative-div">
               <input onChange={this.search} type="text" placeholder="Search for developer to add to your list" />
               <SearchDropDown hideList={this.handleDropdownClick} users={localUsers} />
             </div>
             <h4>My List</h4>
             <div className="mylist">
               {engineers.engineers.map((eng) => (
                 <Engineer
                   key={eng.id}
                   onDelete={this.handleDelete}
                   value="-"
                   engineer={eng}
                 />
               ))}
             </div>
             <div className="mylist" />
             <h4>Developers Removed</h4>
             <div className="mylist">
               {engineers.removed.map((eng) => (
                 <Engineer
                   key={eng.id}
                   onDelete={this.handleReplacing}
                   value="+"
                   engineer={eng}
                   btnClass="btn-delete"
                   mainClass="engineer-delete"
                 />
               ))}
             </div>
             <div>
               <Link onClick={() => { this.handleSaving(engineers.engineers); }} className="btn">Save My List</Link>
             </div>
           </div>
         </main>
       </div>
     </>
   );
 }
}

EngineerList.propTypes = {
  engineers: PropTypes.object.isRequired,
  myEngineers: PropTypes.func.isRequired,
  deleteEngineer: PropTypes.func.isRequired,
  replaceEngineer: PropTypes.func.isRequired,
  saveEngineers: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

const mapStateToProps = ({ engineersReducer }) => ({
  engineers: engineersReducer,
  users: engineersReducer.users,
});

const mapDispatchToprops = {
  myEngineers,
  deleteEngineer,
  replaceEngineer,
  saveEngineers,
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToprops)(EngineerList);
