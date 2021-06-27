
 
const ADD_PIZZA_CART  = 'ADD_PIZZA_CART'
const REMOVE_PIZZA_CART  = 'REMOVE_PIZZA_CART'
const REMOVE_CART_ITEM  = 'REMOVE_CART_ITEM'
const PLUS_CART_ITEM  = 'PLUS_CART_ITEM'
const MINUS_CART_ITEM  = 'MINUS_CART_ITEM'






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

const _get = (obj: any, path: any) => {
   const [firstKey, ...keys] = path.split('.');
   return keys.reduce((val:any, key: number) => {
     return val[key];
   }, obj[firstKey]);
 };
 
 const getTotalSum = (obj: any, path: any) => {
   return Object.values(obj).reduce((sum, obj) => {
     const value = _get(obj, path);
     return sum + value;
   }, 0);
 };

 


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
               totalCount: allPizzas.length ,
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
        const currentTotalPrice = newItems[action.payload].totalPrice
        //@ts-ignore
        const currentTotalCount = newItems[action.payload].items.length

        //@ts-ignore
        delete newItems[action.payload]
         //@ts-ignore
        const items = Object.values(newItems).map(obj => obj.items)
        //@ts-ignore
       


        return {

         ...state,
         items: newItems,
         totalPrice: state.totalPrice - currentTotalPrice,
         totalCount: state.totalCount - currentTotalCount
         
        }


        case PLUS_CART_ITEM: {
           
         const newObjItems = [
            //@ts-ignore
           ...state.items[action.payload].items,
           //@ts-ignore
           state.items[action.payload].items[0],
         ];
         const newItems = {
           ...state.items,
           [action.payload]: {
             items: newObjItems,
             totalPrice: getTotalPrice(newObjItems),
           },
         };
   
         const items = Object.values(newItems).map(obj => obj.items)
         //@ts-ignore
         const  allPizzas = [].concat.apply([], items)
         //@ts-ignore
         const totalPrice = getTotalPrice(allPizzas)

         
         return {
           ...state,
           items: newItems,
           totalCount:  allPizzas.length,
           totalPrice,
         };
       }


       case MINUS_CART_ITEM:  {

         //@ts-ignore
         const oldItems = state.items[action.payload].items;
         const newObjItems =
         //@ts-ignore
           oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
         const newItems = {
           ...state.items,
           [action.payload]: {
             items: newObjItems,
             totalPrice: getTotalPrice(newObjItems),
           },
         };
   
         const items = Object.values(newItems).map(obj => obj.items)
         //@ts-ignore
         const  allPizzas = [].concat.apply([], items)
         //@ts-ignore
         const totalPrice = getTotalPrice(allPizzas)

         
   
         return {
           ...state,
           items: newItems,
           totalCount: allPizzas.length,
           totalPrice,
         };
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

type  PlusCartItemtype = {
   type: 'PLUS_CART_ITEM'
   payload: number   

}

type  MinusCartItemtype = {
   type: 'MINUS_CART_ITEM'
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


export const plusCartItemAC = ( id: number) : PlusCartItemtype => {
   return {type: PLUS_CART_ITEM, payload: id}
}

export const minusCartItemAC = ( id: number ): MinusCartItemtype => {
   return {type: MINUS_CART_ITEM, payload: id}
}



  





