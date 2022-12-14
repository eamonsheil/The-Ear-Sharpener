import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios, {AxiosError} from 'axios';
import { DATABASE_URL } from '../../App';
import './login.css';

export interface ISignupProps {
  placeholder?: undefined;
}

export function Register() {
  const navigate = useNavigate()
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data: Record<string, any>) => {
    // console.log(data);
    axios.post(DATABASE_URL + 'api/student/register', data)
      .then(res => console.log(res))
      .catch(({response}:AxiosError) => console.log("ERROR: ", response))
    // navigate('/')    
  };


  return (
    <form className='flex registerForm' onSubmit={handleSubmit(onSubmit)}>
      <div className="formField">
        <label htmlFor="name">Name </label>
        <input type='text' placeholder='name' 
          {...register("name", 
            { required: true,
              minLength: {
                value: 2,
                message: 'min length is 2'
              }
            })}
          />
      </div>
      {errors.name && <p>{`${errors.name.message}`}</p>}

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
        <input type='password' placeholder='password' 
          {...register("password", {
            required: true,
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters"
              }
            })} 
          />
      </div>
      {errors.password && <p>{`${errors.password.message}`}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
