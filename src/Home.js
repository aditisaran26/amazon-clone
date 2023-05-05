import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image'
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=''/>
        <div className='home__row'>
            {/*product component */}
            <Product id='1'title='The lean startup:How Today Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses' price={29.99} image='https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg' rating={5}/>
            <Product title='Apple iPhone 13 Pro Max, 256GB, Sierra Blue - Unlocked' price={824.97} image='https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.large.jpg' rating={4}/>
        
        </div>

        <div className='home__row'>
            {/*product component */}
            <Product id='2'title='Apple AirPods Pro (2nd Generation)' price={159} image='https://m.media-amazon.com/images/I/2110TEYPKnL._SY445_SX342_QL70_FMwebp_.jpg' rating={3}/>
            <Product id='3'title='Bose Portable Smart Wireless Bluetooth Speaker with Alexa Voice Control Built-in, Wi-Fi Connectivity, 360° Sound, Powerful Bass (Black)' price={79} image='https://m.media-amazon.com/images/I/616zERCeOhL._SX522_.jpg' rating={3}/>
            <Product id='4'title='Samsung 214 cm (85 inches) 8K Ultra HD Smart Neo QLED TV QA85QN900AKXXL (Steel)' price={15108.75} image='https://m.media-amazon.com/images/I/519sokimO0S._SY300_SX300_QL70_FMwebp_.jpg' rating={4}/>
            
            
        </div>

        <div className='home__row'>
            {/*product component */}
            <Product id='5'title='Apple Watch Series 8 [GPS 45mm] Smart Watch w/ Midnight Aluminum Case with Midnight Sport Band - S/M. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant' price={399} image='https://m.media-amazon.com/images/I/71XMTLtZd5L._AC_SX522_.jpg'rating={4}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
