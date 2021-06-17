import React from 'react'
import { Categories, SortPopup } from '../components';
import { Pizza } from './Pizza';
import { useDispatch, useSelector } from 'react-redux';
import {AppStateType} from '../redux/store'
import {setCategoryAC} from '../redux/reducers/filter'




type HomeType = {
  items: string[]
}

const categoryName = [ 'Фрукты', 'Ягоды', 'Овощи', 'Зелень','Сухофрукты']
const sortPopupItems = [{name:'популярности', type: 'popular'}, {name:'цене', type: 'price'},{name:'алфавиту', type: 'alphabet'} ]

export const Home = (props: HomeType) => {

  const items = useSelector((state: AppStateType ) =>  state.pizzasReducer.items)
  const dispatch = useDispatch()
  const onSelectCategory = React.useCallback((item: number) => {
    dispatch(setCategoryAC(item))
  }, [])
  
  


 return <> 
        <div className="container">
          <div className="content__top">
         <Categories onClickItem={onSelectCategory} item={categoryName}/>
          <SortPopup item={sortPopupItems}/>
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