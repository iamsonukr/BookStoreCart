import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Styles/Navbar.css'

function Navbar({size,setShow }) {
  return (
    <nav>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="nav_box">
            <span className='my_shop'>
                Kinder Shop
            </span>
            <div className="cart" onClick={()=>{setShow(false)}}>
                <span>
                <i className="fa fa-shopping-cart"></i>
                {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar