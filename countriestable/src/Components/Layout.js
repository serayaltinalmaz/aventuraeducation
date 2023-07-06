import React from 'react'
import { Outlet } from 'react-router-dom'
import MyMenu from './MyMenu'
const Layout = () => {
    return (
        <>
            <MyMenu/> 
            <Outlet/>
        </>
    )
}

export default Layout