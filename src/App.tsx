import React from 'react'
import './App.css';
import './scss/app.scss'
import {Home} from './pages/Home'
import {Route, Switch} from 'react-router-dom'
import { Cart } from './pages/Cart';
import { useDispatch, useSelector } from 'react-redux';
import {AppStateType} from './redux/store'
import { AreWorking } from './pages/AreWorking';
import { Contacts } from './pages/Contacts';

import {Delivery} from './pages/Delivery'

import {Header} from './components/Header'




function App() {


  // const [pizzas, setPizzas] = React.useState([])

  const pizza = useSelector((state: AppStateType ) =>  state.pizzasReducer.items)




 


  return (
    <div>
    <div className="wrapper">
    <Header/>
      <div className="content">
        <Switch>
       <Route exact path='/' render={() => <Home  items={pizza}/>} />
       <Route exact path='/cart' render={() => <Cart/>} />
       <Route exact path='/areworking' render={() => <AreWorking/>} />
       <Route exact path='/contacts' render={() => <Contacts/>} />
       <Route exact path='/delivery' render={() => <Delivery/>} />



       
       <Route exact path='*' render={() => <h1>404: страница недоступна</h1>} />
       
       

       </Switch>
      </div>
    </div>
    </div>
  );
}




export default App;
