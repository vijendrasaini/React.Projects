// Global State Management

// Patterns:
// Flux: Actions -> Dispatcher -> Store -> View
// MVC - Model, View, Controller

// Actions:
// Always object!
// { type: "ADD_COUNT", payload: 1 }
// { type: "DEC_COUNT", payload: 1 }
// { type: "ADD_TODO",  payload: { id: 1, title: "Learn Redux", status: false} }
// { type: "DELETE_TODO", payload:  }

// DISPATCH:
// Always a function.
// dispatch({ type: "ADD_COUNT", payload: 1 })
// dispatch({ type: "ADD_COUNT", payload: 1 })

// Store:
// Anything!
// { count: 0, todos: [] }

// View:
// Wherever you are seeing the UI, console/browser....

// Reducer function:
// Always:
// Store:{ count: 0, todos: [] }
// Action: { type: "ADD_COUNT", payload: 1 }
// WE give this to store
// reducer always returns a new state

// const { createStore } = require("redux");
import { createStore } from "redux";
import { ADD_COUNT, addCount } from "./Redux/actions.js";
import { reducer } from "./Redux/reducer.js";

// class Store {
//   constructor(reducer, initialState) {
//     this.reducer = reducer;
//     this.state = initialState; /// Current state
//   }

//   getState() {
//     return this.state;
//   }

//   dispatch(action) {
//     this.state = this.reducer(this.state, action);
//   }
// }

const initState = { count: 0, todos: [] };

const store = createStore(reducer, initState);

// Examples:
console.log(store.getState());

store.dispatch(addCount(10));

console.log(store.getState());

store.dispatch(addCount(5));

console.log(store.getState());

store.dispatch({
  type: "ADD_TODO",
  payload: { title: "Learn Redux", status: false },
});

console.log(store.getState());

store.dispatch({
  type: "ADD_TODO",
  payload: { title: "Learn Typescript", status: true },
});

console.log(store.getState());
