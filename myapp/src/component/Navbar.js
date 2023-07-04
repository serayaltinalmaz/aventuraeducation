import React, { useState } from 'react'
import NavlinkComponent from './NavlinkComponent';
function Navbar() {
    return (
        <div className='addlogo'>
            <div className="logoname">LOGO</div>
            <div className='navnav'>
            <NavlinkComponent to="/homepage" label="Anasayfa"  />
            <NavlinkComponent to="products" label="Ürünler" />
            <NavlinkComponent to="/comm" label="İletişim" />
            <NavlinkComponent to="/manage" label="İndirimleri Yönet" />
            </div>
        </div>
    )
}

export default Navbar