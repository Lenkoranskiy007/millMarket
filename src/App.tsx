import React from 'react'
import './App.css';
import './scss/app.scss'
import { Header } from './components';
import {Home} from './pages/Home'
import {Route, Switch} from 'react-router-dom'
import { Cart } from './pages/Cart';
import { useDispatch, useSelector } from 'react-redux';
import {AppStateType} from './redux/store'
import {setPizzasAC, fetchPizzasTC} from './redux/reducers/pizzas'




function App() {


  // const [pizzas, setPizzas] = React.useState([])

  const pizza = useSelector((state: AppStateType ) =>  state.pizzasReducer.items)

  const dispatch = useDispatch()


  React.useEffect(() => {
    dispatch(fetchPizzasTC())
 
   }
   , [])
 


  return (
    <div>
    <div className="wrapper">
    <Header/>
      <div className="content">
        <Switch>
       <Route exact path='/' render={() => <Home  items={pizza}/>} />
       <Route exact path='/cart' render={() => <Cart/>} />
       <Route exact path='*' render={() => <h1>404: страница недоступна</h1>} />

       </Switch>
      </div>
    </div>
    </div>
  );
}




export default App;
