import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{} , dispatch]=useStateValue();

  useEffect(() =>{
    //this will only run once when the app componenet loads

    auth.onAuthStateChanged((authUser) => {            //as soon as the app loads we attach this listner...so if we login or logout it refies the code..it is always listening
      console.log('THE USER IS >>>' ,authUser);

        if(authUser)
        {
          //the user just logged in/ the user was logged in
          dispatch({
            type: 'SET_USER',
            user: authUser,
          });
        }
        else{
          //the user is logged out
          dispatch({
            type:'SET_USER',
            user:null ,
          });
        }

    });   
  } , []);


  return (
  <Router>
    <div className="app">
      <Routes>
      <Route path='/login' element={[<Login/>]}>
        
        </Route>
        <Route path='/' element={[<Header/>,<Home/>]}/>
        <Route path='/checkout' element={[<Header/>,<Checkout/>]}/>
          {/*when i am at this route render the header and home*/}
        <Route path='/payment' element={[<Header/>,<Payment/>]}/>
          
        
      </Routes>
    </div>
  </Router>
  );
}

export default App;


// useEffect--->a listener is always going to keep a track as who has signed in
