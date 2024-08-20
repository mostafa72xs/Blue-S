import React from 'react';
import MainS from '../components/MainS.js';
import  Navbar from '../components/Navbar.js'
import Cart from '../components/Cart.js';
import Sidebar from '../components/Sidebar'
import { useSidenav } from "../components/Hooks/context-sidebar";



function Store() {
    const [ Nav , setNav ] = useSidenav()
return (
    <div>
        {Nav &&(
                <Sidebar
                exit={()=> setNav(false)}
                />)}
        <Cart />
        <Navbar />
        <MainS />
    </div>
)
}

export default Store;