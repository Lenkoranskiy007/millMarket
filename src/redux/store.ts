import {applyMiddleware, combineReducers, compose, createStore }  from 'redux'
import { cartReducer, cartStateType } from './reducers/cart'
import { filterReducer, filterStateType } from './reducers/filter'
import { pizzasReducer, pizzasStateType } from './reducers/pizzas'
import thunk from 'redux-thunk'






export type AppStateType = {
     cartReducer: cartStateType
     filterReducer: filterStateType
     pizzasReducer: pizzasStateType
     


}

const rootReducers = combineReducers<AppStateType>({
     cartReducer,
     filterReducer,
     pizzasReducer,

})

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store  = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))
//@ts-ignore
window.__store__  = store

export default store
