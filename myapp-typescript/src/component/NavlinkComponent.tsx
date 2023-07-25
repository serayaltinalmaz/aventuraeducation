import React from 'react'
import { NavLink } from 'react-router-dom';
type NavlinkComponentProps ={
    label : string;
    to : any;
};
const NavlinkComponent = (props: NavlinkComponentProps) => {
    return (
        <div>
            <NavLink to={props.to} 
                className={({isActive}) => (isActive ? 'navbar-active' : 'navnavnav')}> {props.label} </NavLink>
        </div>
    )
}

export default NavlinkComponent