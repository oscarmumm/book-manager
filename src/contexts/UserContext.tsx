import React, { createContext, useState } from 'react';

type UserData = {
    username: string;
    role: 'user' | 'admin'
};

type UserContextType = {
    userData: UserData | null;
    logIn: (user: UserData) => void;
    logOut: () => void;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [userData, setUserData] = useState<UserData | null>(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const logIn = (user: UserData) => {
        setUserData(user);
        localStorage.setItem('user', JSON.stringify(user));
    };

    const logOut = () => {
        setUserData(null);
        localStorage.removeItem('user');
    };

    return (
        <UserContext.Provider value={{ userData, logIn, logOut }}>
            {children}
        </UserContext.Provider>
    );
};
