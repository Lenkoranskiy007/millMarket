
const initialState: filterStateType = {
   category: 0,
   sortBy: 'popular'
}

export type  filterStateType = {
    category: number
    sortBy: string
}


const SET_CATEGORY = 'SET_CATEGORY'


export const filterReducer = (state: filterStateType = initialState, action: any) => {
    switch(action.type) {
        
        case SET_CATEGORY: 
        debugger
        return {
            ...state,
            category: action.catIndex
        }
    }
    
    return state
}


type SetCategoryACType  = {
    type: 'SET_CATEGORY'
    catIndex: number | null 
}


export const setCategoryAC = (catIndex: number): SetCategoryACType => {
   return {type: SET_CATEGORY, catIndex}
}

