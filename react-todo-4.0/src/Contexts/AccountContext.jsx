import { createContext, useState } from "react";

export const AccountContext = createContext()
export function AccountContextProvider({children}){
    const [token,setToken] = useState(null)
    return (
        <AccountContext.Provider value={{ token, setToken}}>
            {children}
        </AccountContext.Provider>
    )
}