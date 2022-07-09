import '../style.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login";
import Exercises from './Exercises';
import { UserContext } from '../context/UserContextProvider';
import { Button } from '@mui/material';
import { useState, useEffect, useContext } from 'react';
import Home from "./Home";




const App = () => {
  const { setUser } = useContext(UserContext)
  // const [user, setUser] = useState(null);
  // const navigate = useNavigate()
  
const TOKEN = localStorage.getItem("token");
console.log(TOKEN)
 
  useEffect(() => {
    fetch(`/api/users/me`, {
      method: "GET",
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem("token"),

          "Content-Type": "application/json",
          Accept: "application/json"
      }
  })
  .then( res => res.json())
  .then( data => setUser(data))
  },[])

 return ( 
  <div>      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser}/>} />
          <Route path="/exercises/*" element={<Exercises/>}/>
        </Routes>
  </div>
 );
};
 
export default App;