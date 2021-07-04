import React from 'react'
import { Link } from 'react-router-dom'

export const Delivery = () => {
    return <>

    <div className="content">
        <div className="container container--cart">
             <div className="cart cart--empty">
            <img src="https://millmarket.ru/img/delivery.96509df6.png"  alt="Способ доставки" />
            <h3>Доставка и оплата:</h3>
            <br/>
            <h4>Соблюдение температурных режимов при доставке.</h4>
            <br/>
            <h4>Бесплатная доставка от 3 500 рублей.</h4>  
            <br/> 
            <h4>Отборное качество и свежесть.</h4>
            <h3>Доставка курьером:</h3>
            <br/>
            <h4>Минимальная сумма заказа — 1 500 рублей</h4>
            <h4>Бесплатная доставка от 3 500 рублей</h4>
            <br/>
            <h4>Оплата и наличными, и банковской картой, и онлайн</h4>
            <br/>
            <h3>Два интервала</h3>
            <br/>
            <h4>11:00-14:00 , 17:00-20:00</h4>
            <br/>
           <h4>Вы можете оплатить покупки банковской картой и онлайн, и при получении заказа.</h4>
           <br/>
           <h4>Мы принимаем банковские карты: Visa, MasterCard и МИР.</h4> 
           <br/>
           <h4>Доступна оплата через ApplePay.</h4>
           <br/>


            <Link to="/" className="button button--black">
              <span>Вернуться назад</span>
            </Link>
          </div> 
        </div>
      </div>

    </>
}