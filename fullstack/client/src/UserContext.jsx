import {createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}){
    const [info,setUserInfo] = useState({});
    return (
        <UserContext.Provider value = {{info, setUserInfo}} >
            {children}
        </UserContext.Provider>
    )
}