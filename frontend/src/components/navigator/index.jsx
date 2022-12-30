import React from 'react'
import './index.css'
import { navRoutes } from '../../router'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav className='navbar'>
            <div className='nav-logo-container'>
                <NavLink to="" className="nav-logo">
                    Logo
                </NavLink>
            </div>
            {
                navRoutes.map((item, index) => {
                    return (
                        <div key={index} className="nav-div">
                            <NavLink
                                to={item.path}
                                className="nav-item"
                            >
                                {item.name}
                            </NavLink>
                        </div>
                    )
                })
            }
            <div className='nav-icon-container'>
                <NavLink
                    to='login'
                    className="nav-icon"
                >
                    Login Icon
                </NavLink>
                <NavLink
                    to='shopping-cart'
                    className="nav-icon"
                >
                    Shopping Cart Icon
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar