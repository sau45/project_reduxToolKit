import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './cart.css'
import {Card,Button} from 'react-bootstrap';
import {remove} from '../store/CartSlice'

function BasicExample({props}) {

  const dispatch =useDispatch();

  const removeCart =(id)=>{
    dispatch(remove(id));

  }
  
  return (
    <Card className="addedmain-cart">
      <Card.Img variant="top" className='cart-image'src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button onClick={()=>removeCart(props.id)}>Remove Item</Button>
       
      </Card.Body>
    </Card>
  );
}



function Cart() {
  const addedProduct = useSelector(state=>state.cart);
  
  return (
   <>
   <div className="added-cart">
   {addedProduct.map((item)=>(
      <BasicExample props={item}/>

   ))}

   </div>
   
   </>
  )
}

export default Cart
