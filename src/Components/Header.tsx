import React from 'react';
import { NavLink } from 'react-router-dom'
const Header = () => (
    <div>
        <h1>This is a header</h1>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/create">Create</NavLink>
        <NavLink to="/edit">Edit</NavLink>
        <NavLink to="/help">Help</NavLink>
    </div>
)

export default Header