import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './StateProvider';
import reducer,{ initialState } from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*initialState tells what is the data layer initially looks like in the begning
    //reducer is how we manipulate/play with the data layer*/}
    <StateProvider initialState={initialState} 
    reducer={reducer}>
      <App />
    </StateProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//a reducer is how we are able to dispatch the action(i.e ex when we click add to cart button) into the data layer & how we pull the info