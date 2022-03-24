export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const GET_TODO = "GET_TODO"

export const addTodo = (payload)=>({ type : ADD_TODO, payload})
// export const deleteTodo = (payload)=>({ type : DELETE_TODO, payload})


export const getTodo = () => async (dispatch)=>{
    const configUrl = "http://localhost:8080/todos"
    const r1 = await fetch(configUrl)
    const r2 = await r1.json()
    dispatch(addTodo(r2))
}

export const deleteTodo = (text) => async (dispatch)=>{
    const todoObj = {
        task : text,
        status : false
    }
    const arg = {
        method : "POST",
        body : JSON.stringify(todoObj),
        headers : { "content-type" : "application/json" }
    }
    const configUrl = "http://localhost:8080/todos"
    const r1 = await fetch(configUrl ,arg)
    const r2 = await r1.json()
    dispatch(getTodo())
}