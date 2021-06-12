import React from 'react'
import './App.css';
import './scss/app.scss'
import { Header } from './components';
import {Home} from './pages/Home'
import {Route, Switch} from 'react-router-dom'
import { Cart } from './pages/Cart';



function App() {
  return (
    <div>
    <div className="wrapper">
    <Header/>
      <div className="content">
        <Switch>
       <Route exact path='/' render={() => <Home/>} />
       <Route exact path='/cart' render={() => <Cart/>} />
       <Route exact path='*' render={() => <h1>404: страница недоступна</h1>} />

       </Switch>
      </div>
    </div>
    </div>
  );
}




export default App;
