import React from 'react'
import "../HomePage/Home.css"
import "../HomePage/HomePageCard"
import HomePageCard from '../HomePage/HomePageCard'
import {FcHome} from "react-icons/fc"
const Home = () => {
    return (
    <div className='homepagecards'>
        <div className='standalonepage'>
                <h1 style={{color:"white", fontSize:"35px"}}>ANASAYFA</h1>
                <p style={{fontSize:"35px"}}><FcHome/></p>
        </div>
        <HomePageCard 
            blueheader="Most flexible one page"
            header="Section Title"
            p="Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus."
        />
        <HomePageCard 
            cardPosition="left"
            image={process.env.PUBLIC_URL + '/images/standalone-img-1.jpg'} 
            blueheader="Most flexible one page"
            header="Standalone Heading"
            p="Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin."
        />
        <HomePageCard 
            cardPosition="right"
            image={process.env.PUBLIC_URL + '/images/standalone-img-2.jpg'} 
            blueheader="Most flexible one page"
            header="Standalone Heading"
            p="Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin."
        />
        <HomePageCard 
            cardPosition="left"
            image={process.env.PUBLIC_URL + '/images/standalone-img-3.jpg'} 
            blueheader="Most flexible one page"
            header="Standalone Heading"
            p="Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin."
        />
    </div>
    )
}

export default Home