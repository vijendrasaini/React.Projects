
const initState = {}

const reducer = ( state = initState, { type , payload}) => {
    switch(type){
        case LOG_OUT:
            return { }
        case IS_LOGGED:
            return { ...state, status : true}
    }
}