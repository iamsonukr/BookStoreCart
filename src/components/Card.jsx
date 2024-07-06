import React from 'react'
import '../Styles/Card.css'

function Card({item, handelClick}) {
  const {title,author,price}=item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src= {item.img} alt="" />
        </div>
        <div className="details">
            <p id='jojo'>{title}</p>
            <p>{author}</p>
            <p>${price}</p>
            <button onClick={()=>handelClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Card

