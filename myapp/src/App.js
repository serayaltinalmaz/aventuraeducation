import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const products =
    [
        {
            "id": 1,
            "productName": "Bread - Ciabatta Buns",
            "productCategory": "Finance",
            "productDesc": "interdum in ante vestibulum ante ipsum primis in faucibus orci luctus",
            "isHot": true,
            "productPic": "http://dummyimage.com/250x250.png/ff4444/ffffff",
            "currentPrice": 3174,
            "oldPrice": 1252,
            "count": 0,
        },
        {
            "id": 2,
            "productName": "Ham - Virginia",
            "productCategory": "Finance",
            "productDesc": "ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum",
            "isHot": true,
            "productPic": "http://dummyimage.com/250x250.png/dddddd/000000",
            "currentPrice": 3904,
            "oldPrice": 1363,
            "count": 0,
        },
        {
            "id": 3,
            "productName": "Soup - Campbells Beef Noodle",
            "productCategory": "Technology",
            "productDesc": "etiam faucibus cursus urna ut tellus nulla ut erat id mauris",
            "isHot": false,
            "productPic": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
            "currentPrice": 2692,
            "oldPrice": 1308,
            "count": 0,
        },
        {
            "id": 4,
            "productName": "Lamb - Leg, Boneless",
            "productCategory": "n/a",
            "productDesc": "morbi odio odio elementum eu interdum eu tincidunt in leo maecenas",
            "isHot": true,
            "productPic": "http://dummyimage.com/250x250.png/ff4444/ffffff",
            "currentPrice": 3155,
            "oldPrice": 1135,
            "count": 0,
        },
        {
            "id": 5,
            "productName": "Sauce - Thousand Island",
            "productCategory": "Energy",
            "productDesc": "in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus",
            "isHot": true,
            "productPic": "http://dummyimage.com/250x250.png/dddddd/000000",
            "currentPrice": 5094,
            "oldPrice": 1427,
            "count": 0,
        },
        {
            "id": 6,
            "productName": "Broom And Brush Rack Black",
            "productCategory": "Finance",
            "productDesc": "orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum",
            "isHot": false,
            "productPic": "http://dummyimage.com/250x250.png/cc0000/ffffff",
            "currentPrice": 3447,
            "oldPrice": 1249,
            "count": 0,
        },
        {
            "id": 7,
            "productName": "Crackers - Trio",
            "productCategory": "n/a",
            "productDesc": "auctor sed tristique in tempus sit amet sem fusce consequat nulla",
            "isHot": false,
            "productPic": "http://dummyimage.com/250x250.png/cc0000/ffffff",
            "currentPrice": 3453,
            "oldPrice": 1337,
            "count": 0,
        },
        {
            "id": 8,
            "productName": "Tea - Earl Grey",
            "productCategory": "Consumer Non-Durables",
            "productDesc": "magna at nunc commodo placerat praesent blandit nam nulla integer pede",
            "isHot": true,
            "productPic": "http://dummyimage.com/250x250.png/dddddd/000000",
            "currentPrice": 1679,
            "oldPrice": 1273,
            "count": 0,
        },
        {
            "id": 9,
            "productName": "Bacardi Raspberry",
            "productCategory": "Consumer Non-Durables",
            "productDesc": "leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus",
            "isHot": true,
            "productPic": "http://dummyimage.com/250x250.png/ff4444/ffffff",
            "currentPrice": 2122,
            "oldPrice": 1038,
            "count": 0,
        },
        {
            "id": 10,
            "productName": "Appetizer - Shrimp Puff",
            "productCategory": "Basic Industries",
            "productDesc": "dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis",
            "isHot": true,
            "productPic": "http://dummyimage.com/250x250.png/dddddd/000000",
            "currentPrice": 3441,
            "oldPrice": 1070,
            "count": 0,
        }
    ]

  return (
    <div className="App">
      
      
      {products.map((product)=>(
        <div className='compenent'>
        <img src={product.productPic}></img>
        <div className='details'>
          <h1>{product.productName}</h1>
          <p className='desc'>{product.productDesc}</p>
          <p className='price'>{product.currentPrice} TL</p>
          <button className='basket'>Sepete Ekle</button>
        </div>
      </div>
      ))}

    </div>
  );
}

export default App;
