import React from 'react'
import Basketclosed from './Basketclosed';
const Basketcomponent = (props) => {
    return (
        <Basketclosed sidebar={props.sidebar} basket={props.basket} setBasket={props.setBasket} basketsum={props.basketsum} />
    )
}

export default Basketcomponent