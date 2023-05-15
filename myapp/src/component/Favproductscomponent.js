import React from 'react'
import Like from './Like';
const Favproductscomponent = (props) => {
    return (
        <Like products={props.products} likebar={props.likebar} setLikebar={props.setLikebar} />
    )
}

export default Favproductscomponent