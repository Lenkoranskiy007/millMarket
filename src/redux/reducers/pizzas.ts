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
  items: CategoryItemsType



}


type IsLoadedType = {
   type: 'SET_IS_LOADED'
   payload: boolean
}


export const setPizzasAC = (items: any): SetPizzasType => {
 return {type: 'SET_PIZZAS', items}
}

export const setIsLoadedAC = (payload: boolean): IsLoadedType => {
   return {type: 'SET_IS_LOADED', payload}
}






// export const fetchPizzasTC = (sortBy: any, category: any) => {
  
//   return  (dispatch: Dispatch) => {
//     dispatch(setIsLoadedAC(false))
//     axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}`: ''}&_sort=${sortBy}&_order=des`).then((res) => {
//       dispatch(setPizzasAC(res.data))}) 
      
//   }
// }





export type CategoryItemsType = {
  categoryId: number
  categoryName: string
  dateAdd: string
  describe: string
  id: number
  imagePath: string
  initialAmount: number
  name: string
  price: number
  unitMeasureName: string
}


export const fetchItemsTC = (category: number | null) => {
  
  return  (dispatch: Dispatch) => {
    // dispatch(setIsLoadedAC(false))
    axios.get(`https://api.millmarket.ru/api/getProducts?categoryId=${ category === 0 || null ? 5: category }`).then((res) => {
     dispatch(setPizzasAC(res.data.products))  
    console.log(res.data.products)
      
    })
      
  }}


export const fethProductsTC = () => {
  return (dispatch: Dispatch) => {
    axios.get('https://api.millmarket.ru/api/getCategories').then(res => dispatch(setPizzasAC(res.data)))
    

  } 
}

 


