import React from 'react'
import List from '../List'
import Card from './Card'




function Shop({handelClick}) {
  return (
    <section> 
       {List.map((item)=>{
        return <Card item={item} key={item.id} handelClick={handelClick}/>
       })}
    </section>
  )
}

export default Shop
