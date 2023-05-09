import React from 'react'
import { useState, useEffect } from 'react';
function Like(props) {

    let favProducts = props.products.filter((product) => product.fav === true);
    
    return (
    <div className={props.likebar===true ? "likebasket-active": "likebasket-closed"} >
        {favProducts.map((product) => (
            <div className='favproduct'>
            <img src={product.productPic}></img>
            <p>{product.productName}</p>
            <p>{product.currentPrice} TL</p>
            </div>
        ))}
    </div>
    )
}

export default Like