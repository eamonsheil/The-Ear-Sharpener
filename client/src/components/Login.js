import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const defaultLoginObj = {
    email: "",
    password: ""
}
const defaultRegisterObj = {
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
}
function Login({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);
    const [loginFormData, setLoginFormData] = useState(defaultLoginObj);
    const [registerFormData, setRegisterFormData] = useState(defaultRegisterObj);

    const navigate = useNavigate()

    function handleLoginChange(e) {
        setLoginFormData({...loginFormData, [e.target.name]:e.target.value})
    }

    function handleRegisterChange(e) {
        setRegisterFormData({...registerFormData, [e.target.name]:e.target.value})
    }

    function handleLogin(e) {
        e.preventDefault();
        console.log(loginFormData);
       fetch(`/api/users/login`, {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               Accept: "application/json"
           },
           body: JSON.stringify(loginFormData)
       })
       .then( res => res.json())
       .then( data => {
           console.log(data)
            setUser(data);
            localStorage.setItem("token", data.token)

        })
       .catch( error => console.log(error.message));
        navigate('/');

    }

    function handleRegister(e) {
        e.preventDefault();
        console.log(registerFormData);

       fetch(`/api/users`, {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               Accept: "application/json"
           },
           body: JSON.stringify(registerFormData)
       })
       .then( res => res.json())
       .then( data => {
           setUser(data)
            console.log(data)
            localStorage.setItem("token", data.token)
        })
        .catch( error => console.log(error));
        navigate('/');
    }


    return ( 
        <div className="login-page-container"> 
            <div className='app-title'>
                <h3>Sign in or register to track your progress!</h3>
            </div>
        {showLogin ? 
            <div className='login-container'>
            <h2>Login</h2>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="on"
                    >
                <form onSubmit={(e) => handleLogin(e)} className='login-form'>
                    
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            name='email' 
                            placeholder='Email'
                            onChange={(e) => handleLoginChange(e)}
                        />
                    
                        <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        name='password' 
                        placeholder='Password'
                        onChange={(e) => handleLoginChange(e)}
                        />
                    
                    <div className='login-btn'>
                        <Button onClick={(e) => handleLogin(e)} variant='outlined' type='submit'>Login</Button>
                    </div>
                </form>
                </Box>
                <p>Don't have an account?</p>
                <Button onClick={() => setShowLogin(false)}><u>Create One Now</u></Button>
            </div>
            :   
            <div className='login-container'>
                
                <h3>Create Account</h3>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="on"
                    >
                <form className='login-form' onSubmit={(e) => handleRegister(e)}>
                   
                        <TextField
                            required
                            id="outlined-required"
                            label="Name"
                            name='name' 
                            placeholder='Name'
                            onChange={(e) => handleRegisterChange(e)}
                        />
                    
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            name='email' 
                            placeholder='Email'
                            onChange={(e) => handleRegisterChange(e)}
                        />
                    <TextField
                            required
                            type='password'
                            id="outlined-password-input"
                            label="Password"
                            name='password' 
                            placeholder='Password'
                            onChange={(e) => handleRegisterChange(e)}
                        />
                    <TextField
                            required
                            type='password'
                            id="outlined-password-input"
                            label="Confirm Password"
                            name='password_confirmation' 
                            placeholder='Confirm Password'
                            onChange={(e) => handleRegisterChange(e)}
                        />
                    <div className='login-btn'>
                        <Button type="submit" variant='outlined' onClick={(e) => handleRegister(e)}>Create Account</Button>
                    </div>
                </form> 
                    
                </Box>
                <Button onClick={() => setShowLogin(true)}>Return to login</Button>
            </div>}
        </div>
     );
}

export default Login;