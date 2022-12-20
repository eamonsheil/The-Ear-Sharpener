import { createContext, useState } from 'react';
import { DATABASE_URL } from '../App';

export interface IUserContextProps {
    children: JSX.Element;
}

export type User = {
    id: string,
    name: string,
    email: string,
    chordScores?:[],
    pitchScores?:[]
}

export type IUserContext = {
    user:User | null,
    setUser: React.Dispatch<React.SetStateAction<User | null>>,
    handleLogout: () => void
}

export const UserContext = createContext<IUserContext | undefined>(undefined);

export const UserContextProvider = ({children}:IUserContextProps) => {
    const [user, setUser] = useState<User | null>(null);

    const handleLogout = ():void => {
        fetch(DATABASE_URL + "api/student/logout", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              credentials: 'include'
        })
        .then( res => res.json())
        .then( data => {
          console.log(data)
          setUser(null)})
      }

    const value = {
        user,
        setUser,
        handleLogout
    }

    return (
        <UserContext.Provider value={value}> {children} </UserContext.Provider>
    )

}