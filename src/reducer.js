export const initialState ={
    basket: [] ,
    user: null
};

//build a selector
export const getBasketTotal =(basket) =>
    basket?.reduce((amount,item) => item.price +amount ,0);
//reduce is gonna iterate through the basket and tally up the total
const reducer = (state , action) =>{
    console.log(action);
    switch(action.type)
    {
        case 'ADD_TO_BASKET':
            return {
                ...state, //returnong the state whatever it was
                basket: [...state.basket , action.item],
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id == action.id
            );
            let newBasket = [...state.basket];

            if(index >= 0)
            {
                newBasket.splice(index,1);

            }
            else
            {
                console.warn(
                    'Cant remove product (id: ${action.id}) as it is not in the basket'
                )
            }
            return{
                ...state,
                basket:newBasket
                
            }
        case 'AET_USER':
            return{
                ...state,
                user: action.user
            }
            
        default:
            return state;
    }
};

export default reducer;








//state: stste of the application
//action: what are you trying to whether add to cart or remove from cart & so on

//context api and redux is not the same thing but the same pattern