import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
function Navbar() {    
    return (
        <div className='navnav'>
        <NavLink to="/home" className="navnavnav">Anasayfa</NavLink>
        <NavLink to="products" className="navnavnav">Ürünler</NavLink>
        <NavLink to="/comm" className="navnavnav">İletişim</NavLink>
        <NavLink to="/manage" className="navnavnav">İndirimleri Yönet</NavLink>
        </div>
    )
}

export default Navbar