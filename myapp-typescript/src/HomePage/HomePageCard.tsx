import React from 'react'
import "../HomePage/Home.css"
type HomePageCardProps = {
    cardPosition?: any;
    image?: string;
    blueheader: string;
    header: string;
    p: string;
    className?: any;
}
const HomePageCard = (props: HomePageCardProps) => {
    let cardClassName="standalone-detail"
    if (props.cardPosition==="right"){
        cardClassName += "-right";
    }
    else if(props.cardPosition==="left"){
        cardClassName += "-left";
    }
    else {
        cardClassName="standalone-detail;"
    }
    return (
        <div className={`${cardClassName} ${props.className}`}>
            {props.image && <img src={props.image} className='homepageimg' />}
            <div className='card-detail'>
                <div className="blue-header">{props.blueheader}</div>
                <div className="header">{props.header}</div>
                <div className="paragraph">{props.p}</div>
            </div>
        </div>
    )
}

export default HomePageCard