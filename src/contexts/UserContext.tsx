import React, { createContext, useState } from "react";

type UserData = {
    username: string
}

type UserContextType = {
    userData: UserData | null,
    setUserData: React.Dispatch<React.SetStateAction<UserData | null>>
}

export const UserContext = createContext<UserContextType | null>(null)

export const UserContextProvider = ({children} : {children: React.ReactNode}) => {
    const [userData, setUserData] = useState<UserData | null>(null)
    
    return (
        <UserContext.Provider value={{userData, setUserData}}>
            {children}
        </UserContext.Provider>
    )
}

