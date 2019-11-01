import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => (
  <div>
    <h1>Your Profile</h1>
    <p>Check your dev pulse rating from here</p>
    <div>
      <Link to="/list" className="btn">Edit My List</Link>
    </div>
  </div>
);

export default ProfilePage;
