
const initialState: filterStateType = {
   category: null,
   sortBy: {
       type: 'popular',
       order: 'desc'
   }
}

export type  filterStateType = {
    category: number | null
    sortBy: SortByType
}

type SortByType = {
    type: string
       order: string
}


const SET_CATEGORY = 'SET_CATEGORY'
const SET_SORT_BY = 'SET_SORT_BY'



export const filterReducer = (state: filterStateType = initialState, action: any) => {
    switch(action.type) {
        case SET_CATEGORY: 
        return {
            ...state,
            category: action.catIndex
        }
        case SET_SORT_BY: 
       return {
            
            ...state,
            sortBy: action.payload
        }
        default:
        return state
    }
    
    return state
}


type SetCategoryACType  = {
    type: 'SET_CATEGORY'
    catIndex: number | null 
}

type SetSortByACType = {
    type: 'SET_SORT_BY'
    payload: string
}

export const setSortByAC = (payload: string):SetSortByACType  => {
   return {type:'SET_SORT_BY', payload}
}




export const setCategoryAC = (catIndex: number): SetCategoryACType => {
   return {type: SET_CATEGORY, catIndex}
}



