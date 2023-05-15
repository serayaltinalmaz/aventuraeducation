import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    
    return (
        <div className='navnav'>
        <NavLink to="/" className="navnavnav"> Anasayfa </NavLink>
        <NavLink to="products" className="navnavnav"> Ürünler </NavLink>
        <NavLink to="/" className="navnavnav"> İletişim </NavLink>
        </div>

    )
}

export default Navbar