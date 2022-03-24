import { ADD_TODO } from "./action"

const initState = {
    todo : []
}

export const todoReducer = (state = initState, { type , payload})=>{
    switch(type){
        case ADD_TODO:
            return { ...state, todo : payload}
        default : 
            return state
    }
}