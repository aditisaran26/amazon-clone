import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';


function Payment() {
const [{basket,user},dispatch]=useStateValue();

  return (
    <div className='payment'>
        <div className='payment__container'>
            

        <h1>
            Checkout(
                <Link to='/checkout'>{basket?.length} items</Link>
                )
        </h1>

            {/*payment section - delivery address*/ }

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>

                </div>
                <div className='payment__address'>
                    {/* pull users email....as shown in p tag */}
                    <p>{user?.email}</p>
                    <p>address</p>  

                </div>
            </div>



            {/*payment section - review items*/ }

            <div className='payment__section'>
                <div className='payment__title'> 
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
                    {/*for every single item inside the basket i wanna return the checkout ie selected products */}
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.price}
                        />
                    )
                    )}

                </div>
            </div>

            {/*payment section -payment method*/ }

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>

                </div>
                <div className='payment__details'>
                    {/*stripe magic will be here */}

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Payment
