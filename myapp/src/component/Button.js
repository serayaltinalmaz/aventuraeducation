import React from 'react'
import { useEffect } from 'react';
import "../component/Button.css"
const Button = (props) => {
    let buttonClassName = 'custom-button';
    if (props.label === undefined){
        buttonClassName += "-nolabel";
    }
    else if(props.icon===undefined){
        buttonClassName += "-noicon"
    }

    if (props.iconPosition === 'right') {
        buttonClassName += "-icon-right";
    } else {
        buttonClassName += "-icon-left";
    }


    return (
        <button className={`${buttonClassName} ${props.className}`}
            type={props.type}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.label}
            {props.icon && <span className="button-icon">{props.icon}</span>}
        </button>
    )
}

export default Button