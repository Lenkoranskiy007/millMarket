
 
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


 
 
 
 export const cartReducer = (state: cartStateType = initialState, action: any) => {
    switch(action.type ) {
       case ADD_PIZZA_CART :
           return {
               ...state,
               items: {
                   //@ts-ignore
                   [action.payload.id]: [...state.items[action.payload.id], action.payload ]
               }
           } 
        
       

    }
    
    return state
}


type  AddPizzaACType = {
   type: 'ADD_PIZZA_CART'
   payload: any

}


export const addPizzaAC = (payload: any): AddPizzaACType => {
  return {type: ADD_PIZZA_CART, payload }
}

  





