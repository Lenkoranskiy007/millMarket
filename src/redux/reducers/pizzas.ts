import { Dispatch } from "redux"
import axios from 'axios'


const SET_PIZZAS = 'SET_PIZZAS'
const SET_IS_LOADED = 'SET_IS_LOADED'


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
     case SET_PIZZAS: 
     return {
       ...state,
       items: action.items,
       isLoaded: true
     }
     case SET_IS_LOADED:
       return {
         ...state,
         isLoaded: action.payload
       }

      default :
      return state; 
   
    } 

  return state
}

type SetPizzasType = {
  type: 'SET_PIZZAS'
  items: number  | null


}


type IsLoadedType = {
   type: 'SET_IS_LOADED'
   payload: boolean
}


export const setPizzasAC = (items: number  | null): SetPizzasType => {
 return {type: 'SET_PIZZAS', items}
}

export const setIsLoadedAC = (payload: boolean): IsLoadedType => {
   return {type: 'SET_IS_LOADED', payload}
}






export const fetchPizzasTC = () => {
  
  return  (dispatch: Dispatch) => {
    dispatch(setIsLoadedAC(false))
    axios.get('http://localhost:3001/pizzas').then((res) => {
      dispatch(setPizzasAC(res.data))}) 
      
      
    
  }
} 


