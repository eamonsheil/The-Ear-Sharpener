import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { useNavigate } from 'react-router-dom';
import { DATABASE_URL } from '../../App';
import './login.css'

export interface ILoginProps {
  placeholder?: undefined;
}

export function Login() {
  const userContext = useContext(UserContext);
  const navigate = useNavigate()
  const { register, setError, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = async (data: Record<string, any>) => {
    await fetch(DATABASE_URL + 'api/student/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })
    .then(res => {
      if (res.status === 500) {
        throw new Error(`Invalid Credentials`)
      } else {
      return res.json()
      }
    })
    .then(data => 
      userContext?.setUser(
      {
        id: data.id,
        name: data.name,
        email: data.email
      }
    ))
    .catch(err => setError('password', {type:'validate', message: err}, {shouldFocus: true}))
    // navigate('/')
  };


  return (
    <form className='flex loginForm' onSubmit={handleSubmit(onSubmit)}>
      <h3>Login to continue your progress</h3>
      <div className="formField">
        <label htmlFor="email">Email </label>
        <input type='text' placeholder='email' 
          {...register("email", {
             required: "this field is required",
             pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Invalid email address"
             }
            })} 
          />
      </div>
      {errors.email && <p>{`${errors.email.message}`}</p>}

      <div className="formField">
        <label htmlFor="password">Password </label>
        <input type='password' placeholder='password' {...register("password", { required: true })} />
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}
