import React, { useEffect } from 'react'
import { useState } from 'react'
import '../Styles/cart.css'

function Cart({cart,setCart,handelChange}) {
    const [price,setPrice]=useState(0)
    const handleRemove =(id)=>{
        const arr=cart.filter((item)=>item.id!==id)
        setCart(arr)
    }

    const handleprice = () => {
        let ans = 0;
        cart.forEach((item) => {
          ans += item.amount * item.price;
        });
        setPrice(ans);
      };

    useEffect(()=>{
        handleprice();
    })
  return (
    <div>
        <article>
            {
                cart?.map((item)=>(
                    <div className="cart_box" key={item.id}>
                        <div className="cart_img">
                            <img src={item.img} alt="" />
                            <p>{item.title}</p>
                        </div>
                        <div className="buttons">
                            {/* <button onClick={()=>handelChange(item,+1)}>+</button>
                            <button onClick={()=>handelChange(item,-1)}>-</button> */}
                        </div>
                        <div>
                            <span>${item.price} </span>
                            <button onClick={()=>handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                ))
            }
        </article>
        <div className='total'>
            <p>Total Price ${price}</p>
        </div>
    </div>
  )
}

export default Cart