 

 const initialState: cartStateType = {
      cart: []
 }

 export type cartStateType = {
     cart: string[]

 }
 
 
 
 export const cartReducer = (state: cartStateType = initialState, action: any) => {
    return state
}





