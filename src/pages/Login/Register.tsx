import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DATABASE_URL } from '../../App';
import './login.css';

export interface ISignupProps {
  placeholder?: undefined;
}

export function Register() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: Record<string, any>) => {
    console.log(data);
    axios.post(DATABASE_URL + 'api/student/register', data)
      .then((res) => console.log(res))
    // navigate('/')    
  };


  return (
    <form className='flex registerForm' onSubmit={handleSubmit(onSubmit)}>
      <div className="formField">
        <label htmlFor="name">Name </label>
        <input type='text' placeholder='name' {...register("name", { required: true})} />
      </div>

      <div className="formField">
        <label htmlFor="email">Email </label>
        <input type='text' placeholder='email' {...register("email", { required: true})} />
      </div>

      <div className="formField">
      <label htmlFor="password">Password </label>
      <input type='password' placeholder='password' {...register("password", { required: true })} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
