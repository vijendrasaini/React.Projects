import { createStore } from "redux"
import { todoReducer } from "./Todo/reducer"
export const store = createStore(todoReducer)