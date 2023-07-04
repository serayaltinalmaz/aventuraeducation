import React from 'react'
import { RxTwitterLogo } from 'react-icons/rx';
import { BsFacebook } from "react-icons/bs"
import { AiOutlineGoogle } from "react-icons/ai"
import {FaLinkedinIn} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {BiEnvelope} from "react-icons/bi"
const SocialMedia = () => {
    return (
        <>
        <div className="logo">LOGO</div>
        <div className="icons">
            <div className="icon"> <BsFacebook/> </div>
            <div className="icon"> <RxTwitterLogo/> </div>
            <div className="icon"> <AiOutlineGoogle/> </div>
            <div className='icon'> <FaLinkedinIn/> </div>
            <div className='icon'> <BsInstagram/> </div>
            <div className='icon'> <BiEnvelope/> </div>
        </div>
        </>
    )
}

export default SocialMedia