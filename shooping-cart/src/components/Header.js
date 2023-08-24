import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <>
    <header className='header'>
        <div className='flex'>
        <Link to='/'><h1>Shopping cart</h1></Link>
        <input type='search' name='search' placeholder='search item.....'/>
        <Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link>
        </div>
    </header>

      
    </>
  )
}
