import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./Navbar";
import Basketcomponent from './Basketcomponent';
import Favproductscomponent from './Favproductscomponent';
import Footer from './Footer';
const Layout = () => {
    return (
        <>
            <nav>
                <Navbar />
                <Basketcomponent />
                <Favproductscomponent />
            </nav>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout