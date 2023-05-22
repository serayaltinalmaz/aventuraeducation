import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { EventContext } from '../EventContext';
import { BasketContext } from '../BasketContext';
import { BsFillBasketFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import Navbar from "./Navbar";
import Basketcomponent from './Basketcomponent';
import Favproductscomponent from './Favproductscomponent';
import Footer from './Footer';
const Layout = () => {
    const{sumcount, likebar, setLikebar}=useContext(EventContext);
    const{sidebar,setSidebar,}=useContext(BasketContext);
    return (
        <>
            <nav>
                <Navbar />
                <div className={likebar === true ? "hearticon-active" : "hearticon-closed"} onClick={() => {
                    if (likebar === true) {
                        setLikebar(false)
                    } else {
                        setLikebar(true)
                    }
                }}><AiOutlineHeart /></div>
                <div className={sidebar === true ? "basketicon-active" : "basketicon-closed"} onClick={() => {
                    if (sidebar == true) {
                        setSidebar(false);
                    } else {
                        setSidebar(true);
                    }
                }}><BsFillBasketFill />
                    {sumcount > 0 && <p className='badge'>{sumcount}</p>}
                </div>
                <Basketcomponent />
                <Favproductscomponent />
            </nav>
            <Outlet/>
            <Footer/>
            </>
    )
}

export default Layout