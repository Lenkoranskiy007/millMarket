
const initialState: filterStateType = {
   category: 0,
   sortBy: 'popular'
}

export type  filterStateType = {
    category: number
    sortBy: string
}


export const filterReducer = (state: filterStateType = initialState, action: any) => {
    return state
}

