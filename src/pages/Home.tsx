import React from 'react'
import { Categories, SortPopup } from '../components';
import { Pizza } from './Pizza';


type HomeType = {
  items: string[]
}

export const Home = (props: HomeType) => {
 return <> 
        <div className="container">
          <div className="content__top">
         <Categories onClickItem={(item: string ) => console.log(item)} item={[
           'Фрукты', 'Ягоды', 'Овощи', 'Зелень','Сухофрукты'
         ]}/>
          <SortPopup item={['популярности', 'цене', 'алфавиту']}/>
          </div>
          <h2 className="content__title">Все Фрукты</h2>
          <div className="content__items">
            {
              //@ts-ignore
              props.items.map((item) => <Pizza key={item.id} item={item}/>)
          
              
            }
           
          </div>
        </div>
     
     </>
}