import { ADD_COUNT, ADD_TODO, SET_TODO, SUB_COUNT,DELETE_TODO, STATUS_CHANGE } from "./action"

export const reducer = (state, { type , payload}) =>{
    switch(type)
    {
        case ADD_COUNT:
            return { ...state, count : state.count + payload}
        case SUB_COUNT:
            return { ...state, count : state.count - payload}
        case ADD_TODO:
            return { ...state, todo : [ ...state.todo, {task : payload, status : false, id : Date.now()}]}
        case DELETE_TODO:
            let new_todo = []
            for (let i = 0; i < state.todo.length; i++) {
                const element = state.todo[i];
                if(element.id == payload)
                    continue
                new_todo.push(element)
            }
            return { ...state, todo : new_todo}
        case STATUS_CHANGE:
            let new_todo_2 = []
            for (let i = 0; i < state.todo.length; i++) {
                const element = state.todo[i];
                if(element.id == payload.id)
                    {
                        const obj = { task : payload.task,status : payload.status? false: true, id : payload.id}
                        new_todo_2.push(obj)
                        console.log({ obj, payload})
                    }
                else
                    new_todo_2.push(element)
            }
            return { ...state, todo : new_todo_2}
        default:
            return state
    }
}


