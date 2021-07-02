import React from 'react'
import { Link } from 'react-router-dom'


export const Contacts = () => {
    return <> 
    
    <div className="content">
        <div className="container container--cart">
             <div className="cart cart--empty">
            <img src="https://millmarket.ru/img/contacts.137a0f2d.jpeg"  alt="Контакты" />
            <h3>Контакты:</h3>
            <br/>
            <h4>Фактический адрес: 111219, Москва, Калужское шоссе, 22-й километр, дом 10, строение 23.</h4>
            <br/>
            <h4>Электронная почта: millmarket.ru@gmail.com.</h4>  
            <br/> 
            <h4>Телефоны: +7 495 023-02-43.</h4>
            <h3>Реквизиты:</h3>
            <br/>
            <h4>ИП Магомеддибиров Магомеддибир Курбаналиевич.</h4>
            <h4>ИНН 051602812148 / ОГРНИП 320057100049777.</h4>
            <br/>
            <Link to="/" className="button button--black">
              <span>Вернуться назад</span>
            </Link>
          </div> 
        </div>
      </div>

   
    </>
}