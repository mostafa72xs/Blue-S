import React from 'react'
import Loading from './Hooks/Loading.js';
import { useState } from 'react';
import "./css/main.css";
import { useCart } from "react-use-cart";


function Itemcard(props) {
    const [loading , setloading] = useState(false);
    const { addItem } = useCart();

const handleclick = () => {
        addItem(props.item);
        setloading(true);
        setTimeout(()=>{
            setloading(false);
        },2000);
        
    }
return (
        <div className="no" style={{display : "flex" , flexDirection : "column" , justifyContent: "center" , alignItems : "center", maxWidth:"320px" , maxHeight : "510px"}}>
            <img src={props.image}
            alt="product" 
            className="product--image"
            />
            <h3>{props.Name}</h3>
            <p>${props.price}</p>
            <button id="Btnadd" onClick={handleclick}>
                {
                    loading ? (<Loading />) : ("Add to cart")
                }
            </button>
        </div>
        
)
}

export default Itemcard