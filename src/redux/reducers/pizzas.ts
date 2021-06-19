import { Dispatch } from "redux"
import axios from 'axios'


const intialState: pizzasStateType = {
  items: [],
  isLoaded: false
}

export type pizzasStateType = {
    items: string[]
    isLoaded: boolean
}

export const pizzasReducer = (state: pizzasStateType = intialState, action: any) => {
   switch(action.type) {
     case 'SET_PIZZAS': 
     return {
       ...state,
       items: action.items,
       isLoaded: true
     }
   } 
   
  return state
}

type SetPizzasType = {
  type: 'SET_PIZZAS'
  items: any


}


type IsLoadedType = {
   type: 'SET_IS_LOADED'
   isLoaded: boolean
}


export const setPizzasAC = (items: any): SetPizzasType => {
 return {type: 'SET_PIZZAS', items}
}

export const setIsLoadedAC = (isLoaded: boolean): IsLoadedType => {
   return {type: 'SET_IS_LOADED', isLoaded}
}




export const fetchPizzasTC = () => {
  
  return  (dispatch: Dispatch) => {
    axios.get('http://localhost:3001/pizzas').then((res) => {
    
      dispatch(setPizzasAC(res.data))}) 
     

  }
} 


