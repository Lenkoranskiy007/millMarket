import React, {useState} from 'react'


type CategoriesType = {
  item: string[]
  onClickItem: any
}



export const Categories = (props: CategoriesType) => {


  let [activeItem , setActiveItem ]  = React.useState<null | number>(null)

  const onClickItem = (index: number | null) => {
    setActiveItem(index)
  }

    return <> 
       <div className="categories">
              <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => {onClickItem(null)}} >Все</li>
              
                {props.item &&
                  props.item.map((item, key)  => {
                    return <li
                     key={`${item}_${key}`}
                     className={activeItem === key ? 'active' : ''}
                     onClick={() => onClickItem(key)}

                     >
                      {item}
                      
                    </li>
                  })
                }
              </ul>
            </div>
    </>
}