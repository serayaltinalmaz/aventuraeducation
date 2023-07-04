import React from 'react'
import "../component/InputComponent.css"

const InputComponent = (props) => {
    const inputClassName = props.error ? 'inputt-error' : 'inputt';
    return (
        <div class="input-container">
        <label for="input" className={`input-text ${props.className}`}>{props.label}</label>
        <input className={`${inputClassName} ${props.className}`}
            type={props.type}
            id={props.id}
            name={props.name}
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value}
        />
        {props.error && <div className="error-message">{props.error}</div>}
    </div>
    )
}

export default InputComponent