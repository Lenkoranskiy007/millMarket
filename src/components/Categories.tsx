import React from 'react'

type CategoriesType = {
  item: string[]
}

export const Categories: React.FC<CategoriesType> = (props: CategoriesType) => {
    return <> 
       <div className="categories">
              <ul>
                <li className="active">Все</li>
                {/* <li>Фрукты </li>
                <li>Ягоды</li>
                <li>Овощи</li>
                <li>Зелень</li>
                <li>Сухофрукты</li> */}
                {
                  props.item.map(item => {
                    return <li>
                      {item}
                    </li>
                  })
                }
              </ul>
            </div>
    </>
}