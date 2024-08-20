import React from 'react'
import "./css/nav.css"
import { CiMenuBurger } from "react-icons/ci";
import {useSidenav} from './Hooks/context-sidebar'



function Navbar() {

  const [ Nav , setNav ] = useSidenav()

  return (
    <div className='Nav'>
      <div className='cont'>
        <div className='first'>
          <div>
            BLUE S
          </div>
          <p>Order your suit</p>
          <button className='burgericon' onClick={() => setNav(true) }>
            <CiMenuBurger />
          </button>
        </div>
      </div>
      <div className='cont2'>
      <ul>
          <li><a href='/section'>Home</a></li>
          <li><a href='/store'>Shop</a></li>
          <li><a href='/'>Sale</a></li>
          <li><a href='/'>Contact us</a></li>
          <li><a href='/'>Git Hub</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;