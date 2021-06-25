
 
const ADD_PIZZA_CART  = 'ADD_PIZZA_CART'
const REMOVE_PIZZA_CART  = 'REMOVE_PIZZA_CART'
const REMOVE_CART_ITEM  = 'REMOVE_CART_ITEM'




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
      
       case ADD_PIZZA_CART : {
          //@ts-ignore
        const currentPizzaItems = !state.items[action.payload.id] 
        ? [action.payload] 
        //@ts-ignore
        : [...state.items[action.payload.id].items, action.payload ]


       const newItems = {
            //@ts-ignore
            ...state.items,
            //@ts-ignore
            [action.payload.id]:  {
                items: currentPizzaItems,
                totalPrice: getTotalPrice(currentPizzaItems)
            }
          
       }

       
       const items = Object.values(newItems).map(obj => obj.items)
       //@ts-ignore
       const  allPizzas = [].concat.apply([], items)
       //@ts-ignore
       const totalPrice = getTotalPrice(allPizzas)

          return {
               ...state,
               items: newItems,
               totalCount: allPizzas.length,
               totalPrice
              
           } 
        }

        case REMOVE_PIZZA_CART: 
        return {items: {},  totalPrice: 0, totalCount: 0}


        case REMOVE_CART_ITEM: 

        const newItems = {
           ...state.items
        };
        //@ts-ignore
        delete newItems[action.payload]


        return {

         ...state,
         items: newItems
        }


       
           default:
               return state;
    }
    return state


}


type  AddPizzaACType = {
   type: 'ADD_PIZZA_CART'
   payload: any   

}

type  RemoveItemCartType = {
   type: 'REMOVE_CART_ITEM'
   payload: number   

}


export const addPizzaAC = (obj: any): AddPizzaACType => {
  return {type: ADD_PIZZA_CART, payload: obj }
}



export const removePizzaAC = () => {
   return {type: REMOVE_PIZZA_CART}
}


export const removeCartItemAC = (id: number): RemoveItemCartType => {
   return {type: REMOVE_CART_ITEM, payload: id}
}


  





