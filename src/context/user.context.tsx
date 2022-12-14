import { createContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { DATABASE_URL } from '../App';


export const UserContext = createContext(null);

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

export const UserContextProvider = ({children}:IUserContextProps) => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate()
    


    const handleLogout = () => {
        fetch(`${DATABASE_URL}/api/users/logout`)
        .then( res => res.json())
        .then( data => {
          console.log(data)
          setUser(null)})
          localStorage.clear()
          navigate('/');
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