import { createContext, useState } from 'react';
import { useNavigate } from "react-router-dom";


export const UserContext = createContext(null);

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()
    


    const handleLogout = () => {
        fetch(`/api/users/logout`)
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