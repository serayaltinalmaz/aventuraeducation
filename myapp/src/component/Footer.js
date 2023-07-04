import React from 'react'
import SocialMedia from './SocialMedia';
const Footer = () => {
    return (
    <div className="container">
        <div className="container5">
        <div className="container1">
            <div className="getstarted">Get Started</div>
                <div className="item">Home</div>
                <div className="item">Sign up</div>
                <div className="item">Downloads</div>
        </div>
        <div className="container2">
            <div className="aboutus">About us</div>
                <div className="item">Company information</div>
                <div className="item">Contact us</div>
                <div className="item">Reviews</div>
        </div>
        <div className="container3">
            <div className="support">Support</div>
                <div className="item">FAQ</div>
                <div className="item">Help desk</div>
                <div className="item">Forums</div>
        </div>
        <div className="container4">
            <div className="information">Information</div>
                <div className="item1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facilis aliquid corrupti nobis ratione quaerat, facere, hic fuga blanditiis numquam reiciendis, dolor odit temporibus maxime fugiat quos. Modi, repudiandae dolore.</div>
        </div>
    </div>
        <div className="container6">
            <SocialMedia/>
        </div>
        
    </div>
    )
}

export default Footer