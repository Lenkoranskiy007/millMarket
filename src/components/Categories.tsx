import React from 'react'




type CategoriesType = {
  activeCategory: number | null
  item: string[]
  onSelectCategory: any

}

export const Categories = React.memo((props: CategoriesType) => {



  console.log(props.activeCategory);
  
    return <> 
       <div className="categories">
              <ul>
                <li className={props.activeCategory === null ? 'active' : ''} onClick={() => {props.onSelectCategory(null)}} >Все</li>
              
                {props.item &&
                  props.item.map((item, key)  => {
                    return <li
                     key={`${item}_${key}`}
                     className={props.activeCategory=== key ? 'active' : ''}
                     onClick={() => props.onSelectCategory(key)}

                     >
                      {item}
                      
                    </li>
                  })
                }
              </ul>
            </div>
    </>
})