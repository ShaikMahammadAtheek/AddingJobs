import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <h2>Job Portal</h2>
            <Link to="/add">Add Job</Link>
            <Link to="/jobs">Jobs List</Link>
        </nav>
    );
};

export default Navbar;
