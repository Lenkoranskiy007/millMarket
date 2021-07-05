import React from 'react'
import classNames from 'classnames'
import ContentLoader from "react-content-loader"
import { useSelector } from 'react-redux'
import { AppStateType } from '../redux/store'
import {CategoryItemsType} from '../redux/reducers/pizzas'


type PizzaType = {
  onClickAddPizza: (obj: any) => void
  addedCount: number
  id: number
  item: CategoryItemsType
}






export const Pizza = (props: PizzaType) => {

  // const [activeType , setActiveType ] = React.useState(props.item.types[0])
  const [itemActive, setItemActive] = React.useState(0)


    
  const myIfFunc = () => {
    if (props.item.categoryId == 1 ) {
      return <div className="pizza-block__price"> 500 гр  от {props.item.price} ₽</div> 
    
  } else if (props.item.categoryId == 2) {
    return <div className="pizza-block__price"> 500 гр  от {props.item.price} ₽</div> 
  } 
  else if (props.item.categoryId == 3) {
    return <div className="pizza-block__price"> 100 гр  от {props.item.price} ₽</div> 
  } 
  else if (props.item.categoryId == 4) {
    return <div className="pizza-block__price"> 100 гр  от {props.item.price} ₽</div> 
  } else {
    return <div className="pizza-block__price"> 1 шт  от {props.item.price} ₽</div> 

  }


  
  }


  
 
  

  const totalCount = useSelector((state: AppStateType) => state.cartReducer.totalCount )
  

  const id = props.item.id
  const name = props.item.name 
  const imagePath = props.item.imagePath 
  const price = props.item.price 
  

  

  const onAddPizza = () => {
    const obj = {
      //@ts-ignore
      id,
      name,
      //@ts-ignore
      imagePath,
      //@ts-ignore
      price,
      //@ts-ignore
      
    };
    props.onClickAddPizza(obj);
  };

  


  const arrSize = ['тонкое' , 'традиционное']



    return (
        <div>
             <div className="pizza-block">
  <img
    className="pizza-block__image"
    src={props.item.imagePath}
    alt="Pizza"
  />
  <h4 className="pizza-block__title">{props.item.name}</h4>
 

  <div className="pizza-block__bottom">
    {
      
      myIfFunc()
    //   props.item.categoryId == 1 ? <div className="pizza-block__price"> 500 гр  от {props.item.price} ₽</div> 
    // :  <div className="pizza-block__price">1 шт от {props.item.price} ₽</div>
      

    }
    {/* <div className="pizza-block__price">от {props.item.price} ₽</div> */}
    <div className="button button--outline button--add">
      {/* <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg> */}
      <span onClick={onAddPizza} >Добавить </span>
    {props.addedCount && <i>{props.addedCount}</i>}
    
     
    </div>
  </div>
</div> 
        </div>
    )
}



export const LoaderPizza = () => {
  return   <ContentLoader 
  speed={2}
  width={260}
  height={480}
  viewBox="0 0 260 480"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
 
>
  <circle cx="126" cy="77" r="2" /> 
  <circle cx="123" cy="168" r="120" /> 
  <rect x="0" y="300" rx="3" ry="3" width="280" height="26" /> 
  <rect x="0" y="339" rx="6" ry="6" width="280" height="84" /> 
  <rect x="0" y="435" rx="0" ry="0" width="64" height="26" /> 
  <rect x="44" y="448" rx="0" ry="0" width="5" height="2" /> 
  <rect x="171" y="440" rx="0" ry="0" width="3" height="1" /> 
  <rect x="164" y="435" rx="0" ry="0" width="1" height="1" /> 
  <rect x="112" y="434" rx="22" ry="22" width="142" height="26" />
</ContentLoader>
}
