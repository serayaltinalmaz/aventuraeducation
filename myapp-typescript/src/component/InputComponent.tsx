import React from 'react'
import "../mycss/InputComponent.css"

export type InputComponentProps = {
    error?: string;
    className?: string;
    label: string;
    type: string;
    id?: string;
    name?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    value: string;
}

const InputComponent = (props: InputComponentProps) => {
    const inputClassName = props.error ? 'inputt-error' : 'inputt';
    return (
        <div className="input-container">
            <label htmlFor="input" className={`input-text ${props.className}`}>{props.label}</label>
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