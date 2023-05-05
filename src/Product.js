import { Title } from '@mui/icons-material';
import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';



function Product({id, title, image ,price, rating}) {

  const [{basket} , dispatch] = useStateValue();

  console.log('this is the basket>>>',basket);

  const addToBasket = () => {
    //dispatch some action into datalayer
    dispatch(
      {
        type : 'ADD_TO_BASKET' ,
        item:{
          id : id,
          title: title,
          image: image,
          price:price,
          rating: rating,
        },
      }
    );
  };
  return (
    <div className='product'>
      
      {/*Title,price,star rating,image,add to cart*/}
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
          .fill()
          .map((_,i)=>(
            <p>⭐</p>  
          ))}   
        </div>
      </div>
      <img src={image} alt=''/>

      <button onClick ={addToBasket}>Add to Basket</button>
    </div>
  ); 
}

export default Product;
