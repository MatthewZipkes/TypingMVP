import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul className='nav-links'>
                <Link className='LinkStyle' to='/'>
                  <li>Home</li>
                </Link>
                <Link className='LinkStyle' to='/practice'>
                  <li>Practice</li>
                </Link>
                <Link className='LinkStyle' to='/race'>
                  <li>Race</li>
                </Link>
                <Link className='LinkStyle' to='/customGame'>
                <li>Custom Game</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;