import React from 'react'
import "./css/head.css"
import { AiFillGithub } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"


function Head (){


    return (
        <div className="head">
            <div className='Background'>
                <div>
                    BLUE S
                </div>
            </div>
            <div className='home'>
                <div>
                <h1>order your special<br/>suit online</h1>
                    <button><a href="/section" className='ord'>ORDER NOW</a></button>
                <div className='ico'>
                <a href="/" style={{color:"white"}}><AiFillGithub size={25} /></a>
                <a href="/" style={{color:"white",}}><AiFillInstagram size={25} /></a>
                <a href="/" style={{color:"white",}}><AiFillTwitterCircle size={25} /></a>
                </div>
                </div>
                <div className='s'>
                <a href='/'>SERVICES</a>
                </div>
            </div>
        </div>
    )
};


export default Head;