//actions : what to do { always an object}
//reducers : how to do { function }
//store : centralized store for whole react app
//dispatch : function to trigger an action

// import { createStore } from 'redux'
const { createStore } = require('redux')

//actions 
const action_name = "INCREMENT"
function addOne(payload){
    return {
        type : action_name,
        payload 
    }
}


//reducer
const reducer = ( state, { type , payload}) =>{
    switch(type)
    {
        case action_name :
             return {...state, count : state.count + payload}
        default :
            return state
    }
}

//store
class Store {
    constructor(reducer, intiaState){
        this.state = intiaState
        this.reducer = reducer
    }
    getState(){
        return this.state
    }
    // dispatch
    dispatch(action){
        this.state = this.reducer(this.state, action )
    }
}
const initialState = { count : 0 }
// const store = new Store(reducer, initialState )
const store = createStore( reducer, initialState)
console.log(store)
console.log(store.getState())
store.dispatch(addOne(5))
console.log(store.getState())

store.dispatch(addOne(40))
console.log(store.getState())
