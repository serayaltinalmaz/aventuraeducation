import React from 'react'
import "../component/Button.css"
const Button = (props) => {
    let buttonClassName = 'custom-button';
    if (props.label === undefined){
        buttonClassName += "-nolabel";
    }
    else if(props.icon===undefined){
        buttonClassName += "-noicon"
    }
    return (
        <button className={`${buttonClassName} ${props.className}`}
            type= {props.type}
            disabled= {props.disabled}
            onClick={props.onClick}
        >
            {props.label}
            {props.icon}
        </button>
    )
}

export default Button