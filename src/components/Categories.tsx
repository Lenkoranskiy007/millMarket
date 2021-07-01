import React from 'react'




type CategoriesType = {
  activeCategory: number | null
  item: string[]
  onSelectCategory: any

}

export const Categories = React.memo((props: CategoriesType) => {
  

  
    return <> 
       <div className="categories">
              <ul>
              
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



