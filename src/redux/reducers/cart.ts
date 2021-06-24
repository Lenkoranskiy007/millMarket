
 
const ADD_PIZZA_CART  = 'ADD_PIZZA_CART'


 const initialState: cartStateType = {
      items: {},
      totalPrice: 0,
      totalCount: 0
 }

 export type cartStateType = {
    items: object
    totalPrice: number
    totalCount: number

 }


 
 //@ts-ignore
 const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

 
 export const cartReducer = (state: cartStateType = initialState, action: any) => {
    switch(action.type ) {
       case ADD_PIZZA_CART : 
       const newItems = {
            //@ts-ignore
            ...state.items,
            //@ts-ignore
            [action.payload.id]: !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id], action.payload ]
          
       }
       //@ts-ignore
       const  allPizzas = [].concat.apply([], Object.values(newItems))
       //@ts-ignore
       const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0) 



           return {
               ...state,
               items: newItems,
               totalCount: allPizzas.length,
               totalPrice
              
           }; 
        
       

           default:
               return state;
    }
    return state
}


type  AddPizzaACType = {
   type: 'ADD_PIZZA_CART'
   payload: any

}


export const addPizzaAC = (obj: any): AddPizzaACType => {
  return {type: ADD_PIZZA_CART, payload: obj }
}

  





