import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/footer";
import Cart from '../components/Cart'
import Sidebar from '../components/Sidebar'
import { useSidenav } from "../components/Hooks/context-sidebar";

function Section (){
    const [ Nav , setNav ] = useSidenav()


    return(
        <div className="Sections">
            {Nav &&(
                <Sidebar
                exit={()=> setNav(false)}
                />)}
            <Cart />
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}

export default Section;