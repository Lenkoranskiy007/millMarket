import React from 'react'
import { Categories, SortPopup } from '../components';
import { Pizza } from './Pizza';
import { useDispatch, useSelector } from 'react-redux';
import {AppStateType} from '../redux/store'
import {setCategoryAC} from '../redux/reducers/filter'




type HomeType = {
  items: string[]
}

export const Home = (props: HomeType) => {

  const items = useSelector((state: AppStateType ) =>  state.pizzasReducer.items)
  const dispatch = useDispatch()
  

 return <> 
        <div className="container">
          <div className="content__top">
         <Categories onClickItem={(item: number ) => dispatch(setCategoryAC(item))} item={[
           'Фрукты', 'Ягоды', 'Овощи', 'Зелень','Сухофрукты'
         ]}/>
          <SortPopup item={[{name:'популярности', type: 'popular'}, {name:'цене', type: 'price'},{name:'алфавиту', type: 'alphabet'} ]}/>
          </div>
          <h2 className="content__title">Все Фрукты</h2>
          <div className="content__items">
            {
              //@ts-ignore
              items.map((item) => <Pizza key={item.id} item={item}/>)
              
            }
           
          </div>
        </div>
     
     </>
}