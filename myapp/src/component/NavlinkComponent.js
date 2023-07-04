import React from 'react'
import { NavLink } from 'react-router-dom';
const NavlinkComponent = (props) => {
    return (
        <div>
            <NavLink to={props.to} 
                className={({isActive}) => (isActive ? 'navbar-active' : 'navnavnav')}> {props.label} </NavLink>
        </div>
    )
}

export default NavlinkComponent