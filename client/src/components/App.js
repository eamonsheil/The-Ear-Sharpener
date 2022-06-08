import '../style.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login";
import Exercises from './Exercises';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import Home from "./Home";

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()
  
const TOKEN = localStorage.getItem("token");
console.log(TOKEN)
 
  useEffect(() => {
    fetch(`/users/me`, {
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

  function handleLogout() {
    fetch(`/users/logout`)
    .then( res => res.json())
    .then( data => {
      console.log(data)
      setUser(null)})
      localStorage.clear()
      navigate('/');
  }

 return ( 
  <div>
      {/* {user ? 
        <div className='welcome-login'> 
          <h4>Welcome, {user.name}</h4>
          <Button variant="text" color="error" onClick={() => handleLogout()}>Logout</Button>
        </div> 
      : 
      <div className='welcome-login'>
        <Button onClick={() => navigate('/login')}>Login</Button>
      </div>
      } */}
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} handleLogout={handleLogout}/>} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/exercises/*" element={<Exercises user={user} handleLogout={handleLogout}/>}/>
      </Routes>
  </div>
 );
};
 
export default App;