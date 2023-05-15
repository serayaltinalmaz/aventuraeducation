import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Basketpage from './pages/Basketpage';
import Productspage from './pages/Productspage';
import Favproductspage from './pages/Favproductspage';
import { BsFillBasketFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import Basketcomponent from './component/Basketcomponent';
import Favproductscomponent from './component/Favproductscomponent';
function App() {

  const [sidebar, setSidebar] = useState(false);
  const [basket, setBasket] = useState([]);
  const [sumcount, setSumcount] = useState(0);
  const [basketsum, setBasketsum] = useState(0);
  const [likebar, setLikebar] = useState(false);
  const [products, setProducts] = useState(productsObj);

  useEffect(() => {
    let bsum = 0;
    basket.forEach(price => {
      if (price.count > 1) {
        bsum += Number(price.count * price.currentPrice);
      } else {
        bsum += Number(price.currentPrice);
      }
    })
    setBasketsum(bsum);
    let countsum = 0;
    basket.forEach(product => {
      let counter = countsum += product.count
      setSumcount(counter)
    })
    if (countsum === 0) {
      setSumcount(0)
    }
  }, [basket])


  return (
    <div className="App">
      <nav>
        <Navbar />  
        <div className={likebar===true ? "hearticon-active": "hearticon-closed"} onClick={()=>{
            if(likebar===true){
                setLikebar(false)
            }else{
                setLikebar(true)
            }
        }}><AiOutlineHeart/></div>
        <div className={sidebar === true ? "basketicon-active" : "basketicon-closed"} onClick={() => {
            if (sidebar == true) {
            setSidebar(false);
            } else {
            setSidebar(true);
            }
        }}><BsFillBasketFill />
        {sumcount > 0 && <p className='badge'>{sumcount}</p>} 
        </div>
        {<Basketcomponent sidebar={sidebar} basket={basket} setBasket={setBasket} basketsum={basketsum} />}
        {<Favproductscomponent products={products} setProducts={setProducts} basket={basket} setBasket={setBasket} likebar={likebar} setLikebar={setLikebar} />}
      </nav>
      <Routes>
        <Route path='products' element={<Productspage setProducts={setProducts} products={products} basket={basket} setBasket={setBasket} />} />
        <Route path='basketpage' element={ <Basketpage basket={basket} /> }/>
        <Route path='favproductspage' element={ <Favproductspage products={products} /> }/>
      </Routes>
    </div>
  )
}

export default App;
export const productsObj =
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
      "fav": false,
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
      "fav": false,
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
      "fav": false,
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
      "fav": false,
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
      "fav": false,
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
      "fav": false,
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
      "fav": false,
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
      "fav": false,
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
      "fav": false,
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
      "fav": false,
    }
  ]