import React from 'react'
import Basketc from '../component/Basketc'
const Basketpage = (props) => {
    return (
        props.basket.map((product) => (
            <Basketc product={product} basket={props.basket} setBasket={props.setBasket} />
        ))
    )
}

export default Basketpage