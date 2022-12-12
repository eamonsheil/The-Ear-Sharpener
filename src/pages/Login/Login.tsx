import * as React from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DATABASE_URL } from '../../App';

export interface ILoginProps {
  placeholder?: undefined;
}

export function Login() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: Record<string, any>) => {
    console.log(data);
    axios.post(DATABASE_URL + 'api/student/register', data)
      .then((res) => console.log(res))
    // navigate('/')    
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input type='text' placeholder='name' {...register("name", { required: true})} />
      
      <label htmlFor="email">Email</label>
      <input type='text' placeholder='email' {...register("email", { required: true})} />


      {/* {errors.email && <p>This field is required</p>} */}

      <label htmlFor="password">Password</label>
      <input type='password' placeholder='password' {...register("password", { required: true })} />


      {/* {errors.password && <p>This field is required</p>} */}

      <button type="submit">Submit</button>
    </form>
  );
}
