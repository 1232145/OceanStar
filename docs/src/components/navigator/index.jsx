import React from 'react'
import './index.css'
import { navRoutes } from '../../router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import colors from '../color'

function NavBar() {
    return (
        <nav className='navbar'>
            <div className='nav-logo-container'>
                <NavLink to="/" className="nav-logo"> </NavLink>
            </div>
            {
                navRoutes.map((item, index) => {
                    return (
                        <div key={index} className="nav-div">
                            <NavLink
                                to={item.path}
                                className="nav-item" style={{color : colors.darkBlue}}>
                                {item.name}
                            </NavLink>
                        </div>
                    )
                })
            }
            <div className='nav-icon-container'>
                <NavLink to='/login' className="nav-icon">
                    <FontAwesomeIcon className='icon' icon={faCircleUser} 
                                     style={{color : colors.darkBlue}}/>     
                </NavLink>
                <NavLink to='/shopping-cart' className="nav-icon">
                    <FontAwesomeIcon className='icon' icon={faShoppingCart} 
                                     style={{color : colors.darkBlue}}/ >     
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar