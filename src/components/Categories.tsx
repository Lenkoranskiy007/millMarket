import React from 'react'




type CategoriesType = {
  item: string[]
  onClickItem: any
}

export const Categories = React.memo((props: CategoriesType) => {


  let [activeItem , setActiveItem ]  = React.useState<null | number>(null)


  const selectItem = (index: number | null) => {
    setActiveItem(index)
    props.onClickItem(index)


  }

    return <> 
       <div className="categories">
              <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => {selectItem(null)}} >Все</li>
              
                {props.item &&
                  props.item.map((item, key)  => {
                    return <li
                     key={`${item}_${key}`}
                     className={activeItem === key ? 'active' : ''}
                     onClick={() => selectItem(key)}

                     >
                      {item}
                      
                    </li>
                  })
                }
              </ul>
            </div>
    </>
})