import React from 'react'
import "./styles/header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='header'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to=''>Profiles</Link></li>
        </ul>

        <h1>~Gentle_Coder~</h1>

        <ul>
            <li><Link to="">Messages</Link></li>
            <li><Link to="/notifications">Notifications</Link></li>
        </ul>

    </nav>
  )
}

export default Header