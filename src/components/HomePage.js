import React from 'react';
import { Link } from 'react-router-dom';
import Table from './table';

const HomePage = () => (
  <div className="container">
    <p className="tableHeader">My Developers Average Score</p>
    <Link to="/list" className="btn">Edit My List</Link>
    <Table />
  </div>
);

export default HomePage;
