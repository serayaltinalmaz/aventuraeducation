import React from 'react'
import {Link } from 'react-router-dom';
function Like(props) {

    let favProducts = props.products.filter((product) => product.fav === true);
    const displayedItems = favProducts.slice(0, 3); // İlk üç ürünü alacak şekilde listeyi sınırla
    return (
    <div className={props.likebar===true ? "likebasket-active": "likebasket-closed"} >
        {displayedItems.map((product) => (
            <div className='favproduct'>
            <img src={product.productPic}></img>
            <p>{product.productName}</p>
            <p>{product.currentPrice} TL</p>
            </div>
        ))}
        <Link to="favproductspage"> Favorileri gör</Link>
    </div>
    
    )
}

export default Like
