import React from 'react'
import { Categories, SortPopup } from '../components';
import { Pizza , LoaderPizza} from './Pizza';
import { useDispatch, useSelector } from 'react-redux';
import {AppStateType} from '../redux/store'
import {setCategoryAC, setSortByAC} from '../redux/reducers/filter'
import {setPizzasAC, fetchPizzasTC} from '../redux/reducers/pizzas'






type HomeType = {
  items: string[]
}

const categoryName = [ 'Фрукты', 'Ягоды', 'Овощи', 'Зелень','Сухофрукты']
const sortPopupItems = [{name:'популярности', type: 'popular', order: 'desc'}, {name:'цене', type: 'price', order: 'desc' },{name:'алфавиту', type: 'name', order: 'asc'} ]

export const Home = (props: HomeType) => {
  const items = useSelector((state: AppStateType ) =>  state.pizzasReducer.items)
  const isLoaded = useSelector((state: AppStateType ) =>  state.pizzasReducer.isLoaded)
  const category = useSelector((state: AppStateType) => state.filterReducer.category)
  const sortByName = useSelector((state: AppStateType) => state.filterReducer.sortBy)

  
  
  


  React.useEffect(() => {
    dispatch(fetchPizzasTC(sortByName,category ))
 
   }
   , [category, sortByName])


  const dispatch = useDispatch()
  const onSelectCategory = React.useCallback((item: number | null) => {
    //@ts-ignore
    dispatch(setCategoryAC(item))
  }, [])

  const onSelectSortType = React.useCallback((item: any) => {
    dispatch(setSortByAC(item))
  }, [])

  
  

 return <> 
        <div className="container">
          <div className="content__top">
         <Categories  activeCategory={category}  onSelectCategory={onSelectCategory} item={categoryName}/>
          <SortPopup setSortByAC={setSortByAC} item={sortPopupItems} sortByName={sortByName.type} onSelectSortType={onSelectSortType}/>
          </div>
          <h2 className="content__title">Все Фрукты</h2>
          <div className="content__items">
            {
            //@ts-ignore
            isLoaded ? items.map((item, id) => <Pizza key={item.id} item={item}/>) :  Array(10).fill(0).map((_, index) =><LoaderPizza key={index}/> )}
           
           
          </div>
        </div>
     
     </>
}