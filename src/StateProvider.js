import React , {createContext , useContext , useReducer} from 'react';

//prepares data layer
export const StateContext = createContext();

//this will wrap our app and will provide the data layer to every component
export const StateProvider = ({reducer , initialState, children}) =>(
    <StateContext.Provider value ={useReducer(reducer,initialState)}>
        {children}
        </StateContext.Provider>
);

//pull info from the data layer
export const useStateValue = () => useContext(StateContext);
