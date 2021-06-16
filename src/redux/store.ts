import {combineReducers, createStore }  from 'redux'
import { cartReducer, cartStateType } from './reducers/cart'
import { filterReducer, filterStateType } from './reducers/filter'
import { pizzasReducer, pizzasStateType } from './reducers/pizzas'


export type AppStateType = {
     cartReducer: cartStateType
     filterReducer: filterStateType
     pizzasReducer: pizzasStateType
}

const rootReducers = combineReducers<AppStateType>({
     cartReducer,
     filterReducer,
     pizzasReducer
})

//@ts-ignore
const store = createStore(rootReducers, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//@ts-ignore
window.store = store

export default store
