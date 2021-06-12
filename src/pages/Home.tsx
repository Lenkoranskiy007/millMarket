import React from 'react'
import { Categories, SortPopup } from '../components';


export const Home = () => {
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
            <div className="pizza-block">
  <img
    className="pizza-block__image"
    src="https://apicp.millmarket.ru/products/1/11.jpeg"
    alt="Pizza"
  />
  <h4 className="pizza-block__title">Бананы</h4>
  <div className="pizza-block__selector">
    <ul>
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">26 см.</li >
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от 395 ₽</div>
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
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div> <div className="pizza-block">
  <img
    className="pizza-block__image"
    src="https://apicp.millmarket.ru/products/1/12.jpeg"
    alt="Pizza"
  />
  <h4 className="pizza-block__title">Манго спелое</h4>
  <div className="pizza-block__selector">
    <ul>
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">26 см.</li>
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от 395 ₽</div>
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
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div> <div className="pizza-block">
  <img
    className="pizza-block__image"
    src="https://apicp.millmarket.ru/products/1/13.jpeg"
    alt="Pizza"
  />
  <h4 className="pizza-block__title">Яблоки красные</h4>
  <div className="pizza-block__selector">
    <ul>
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">26 см.</li>
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от 395 ₽</div>
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
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div> <div className="pizza-block">
  <img
    className="pizza-block__image"
    src="https://apicp.millmarket.ru/products/1/14.jpeg"
    alt="Pizza"
  />
  <h4 className="pizza-block__title">Апельсин</h4>
  <div className="pizza-block__selector">
    <ul>
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">26 см.</li >
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от 395 ₽</div>
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
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div> <div className="pizza-block">
  <img
    className="pizza-block__image"
    src="https://apicp.millmarket.ru/products/2/20.jpeg"
    alt="Pizza"
  />
  <h4 className="pizza-block__title">Клубника</h4>
  <div className="pizza-block__selector">
    <ul>
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">26 см.</li >
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от 395 ₽</div>
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
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div> <div className="pizza-block">
  <img
    className="pizza-block__image"
    src="https://apicp.millmarket.ru/products/2/21.jpeg"
    alt="Pizza"
  />
  <h4 className="pizza-block__title">Малина</h4>
  <div className="pizza-block__selector">
    <ul>
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">26 см.</li >
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от 395 ₽</div>
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
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div> <div className="pizza-block">
  <img
    className="pizza-block__image"
    src="https://apicp.millmarket.ru/products/2/33.jpeg"
    alt="Pizza"
  />
  <h4 className="pizza-block__title">Смородина</h4>
  <div className="pizza-block__selector">
    <ul>
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">26 см.</li>
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от 395 ₽</div>
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
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div> <div className="pizza-block">
  <img
    className="pizza-block__image"
    src="https://apicp.millmarket.ru/products/2/34.jpeg"
    alt="Pizza"
  />
  <h4 className="pizza-block__title">Ежевика</h4>
  <div className="pizza-block__selector">
    <ul>
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">26 см.</li >
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от 395 ₽</div>
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
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div> 
<div className="pizza-block">
  <img
    className="pizza-block__image"
    src="https://apicp.millmarket.ru/products/1/114.jpeg"
    alt="Pizza"
  />
  <h4 className="pizza-block__title">Яблоки гренни</h4>
  <div className="pizza-block__selector">
    <ul>
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">26 см.</li>
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от 395 ₽</div>
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
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div>
<div className="pizza-block">
  <img
    className="pizza-block__image"
    src="https://apicp.millmarket.ru/products/3/22.jpeg"
    alt="Pizza"
  />
  <h4 className="pizza-block__title">Бакинские помидоры</h4>
  <div className="pizza-block__selector">
    <ul>
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">26 см.</li>
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от 395 ₽</div>
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
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div>
<div className="pizza-block">
  <img
    className="pizza-block__image"
    src="https://apicp.millmarket.ru/products/3/23.jpeg"
    alt="Pizza"
  />
  <h4 className="pizza-block__title">Огурцы</h4>
  <div className="pizza-block__selector">
    <ul>
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">26 см.</li>
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от 395 ₽</div>
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
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div>
<div className="pizza-block">
  <img
    className="pizza-block__image"
    src="https://apicp.millmarket.ru/products/3/24.jpeg"
    alt="Pizza"
  />
  <h4 className="pizza-block__title">Брокколи</h4>
  <div className="pizza-block__selector">
    <ul>
      <li className="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li className="active">26 см.</li>
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от 395 ₽</div>
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
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div>
          </div>
        </div>
     
     </>
}