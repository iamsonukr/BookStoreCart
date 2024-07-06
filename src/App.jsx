import { useEffect, useMemo, useState } from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart"

function App() {
  const [cart, setCart] = useState([])
  const [warning,setWarning]=useState(false)
  const [show,setShow]=useState(true)

  function handelClick(item) {
    
    const isPresent = cart.some((product) => item.id === product.id);
    if (isPresent) {
      setWarning(true)
      setTimeout(()=>{
        setWarning(false)
      },2000);
      return;
    } else {
      setCart([...cart, item]);
    }
  }

  const handelChange =(item,d)=>{
    let ind=-1;
    cart.forEach((data,index)=>{
      if(data.id===item.id)
      ind=index;
    });
    const tempArr=cart;
    tempArr[ind].amount+=d;

    if(tempArr[ind].amount===0){
      tempArr[ind].amount=1;
      setCart([...tempArr])
    }
  }

  return (
    <div>
      <Navbar size={cart.length} setShow={setShow}/>
      {
        show ?  <Shop handelClick={handelClick}/> 
        : <Cart cart={cart} setCart={setCart} handelChange={handelChange}/>
      }
     
      {
        warning && <div className="warning">
          Item is already in your cart
        </div>
      }
    </div> 
  );
}

export default App;
