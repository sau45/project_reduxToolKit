import React, { useEffect, useState } from 'react'
import './product.css'
import {Card,Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { add } from '../store/CartSlice';
import { Link} from 'react-router-dom';







function BasicExample({props}) {

 


  const dispatch = useDispatch();
  const addToCart = (props)=>{
    dispatch(add(props))

  }




    
  return (
    <Card className="cloth-card">
      <Link to ='/detail' ><Card.Img className="cloth-image"variant="top" src={props.image} /></Link>
      <Card.Body>
        <Card.Title style={{fontWeight:'bold'}}>{props.title}</Card.Title>
        <Card.Text className='price'>
        <p> price: Rs.{props.price}</p>
        </Card.Text>
        <Button style={{marginLeft:'49px'}} onClick={()=>addToCart(props)}>Add to Cart</Button>
       
       
      </Card.Body>
    </Card>
  );
}



function Product() {


    const [data,setData]=useState([]);

    const url = 'https://fakestoreapi.com/products';

            useEffect(()=>{
                fetch(url).then((res)=>res.json()).then((data)=>setData(data));

            },[])


    return (
        <>
          <h1 className='product-dashboard'>Product Dashboard</h1>
        <div className="all-card">
        {data.map((item)=>(

        <BasicExample props={item}/>
        ))}

        </div>


    </>
  )
}

export default Product
