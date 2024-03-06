import {createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}){
    const [info,setUserInfo] = useState({});
    const [selectDate, setSelectDate] = useState(null);

  return (
    <UserContext.Provider value={{ info, setUserInfo, selectDate, setSelectDate }}>
      {children}
    </UserContext.Provider>
  );
}