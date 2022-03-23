const LOG_OUT = "LOG_OUT"
const IS_LOGGED = "IS_LOGGED"


const logOut = (payload) => ( { type : LOG_OUT, payload})
const isLogged = (payload) => ( { type : IS_LOGGED, payload})
