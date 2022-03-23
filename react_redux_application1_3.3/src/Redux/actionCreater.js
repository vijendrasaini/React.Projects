import { ADD_COUNT, ADD_TODO, DELETE_TODO, SET_TODO, STATUS_CHANGE, SUB_COUNT } from "./action";

export const addCount = (payload)=>({ type : ADD_COUNT, payload})
export const subCount = (payload)=>({ type : SUB_COUNT, payload})
export const addTodo = (payload) =>({ type : ADD_TODO, payload})
export const setTodo = (payload) =>({ type : SET_TODO, payload})
export const deleteTodo = (payload) =>({ type : DELETE_TODO, payload})
export const changeStatus = (payload) =>({ type : STATUS_CHANGE, payload})