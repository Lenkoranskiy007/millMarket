
const intialState: pizzasStateType = {
  items: []
}

export type pizzasStateType = {
    items: string[]
}

export const pizzasReducer = (state: pizzasStateType = intialState, action: any) => {
   switch(action.type) {
     case 'SET_PIZZAS': 
     return {
       ...state,
       items: action.items
     }
   } 
   
  return state
}


export const setPizzasAC = (items: any) => {
 return {type: 'SET_PIZZAS', items}
}



