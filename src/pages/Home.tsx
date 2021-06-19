import React from 'react'
import { Categories, SortPopup } from '../components';
import { Pizza , LoaderPizza} from './Pizza';
import { useDispatch, useSelector } from 'react-redux';
import {AppStateType} from '../redux/store'
import {setCategoryAC} from '../redux/reducers/filter'
import {setPizzasAC, fetchPizzasTC} from '../redux/reducers/pizzas'






type HomeType = {
  items: string[]
}

const categoryName = [ 'Фрукты', 'Ягоды', 'Овощи', 'Зелень','Сухофрукты']
const sortPopupItems = [{name:'популярности', type: 'popular'}, {name:'цене', type: 'price'},{name:'алфавиту', type: 'alphabet'} ]

export const Home = (props: HomeType) => {



  React.useEffect(() => {
    dispatch(fetchPizzasTC())
 
   }
   , [])

  const items = useSelector((state: AppStateType ) =>  state.pizzasReducer.items)
  const isLoaded = useSelector((state: AppStateType ) =>  state.pizzasReducer.isLoaded)
  console.log(isLoaded);
  

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
            isLoaded ? items.map((item, id) => <Pizza key={id} item={item}/>) :  Array(10).fill(<LoaderPizza/>)}
           
           
          </div>
        </div>
     
     </>
}