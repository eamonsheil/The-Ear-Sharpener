import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { DATABASE_URL } from '../../App';
import './login.css';

export interface ISignupProps {
  placeholder?: undefined;
}

export function Register() {
  const navigate = useNavigate()
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = async (data: Record<string, any>) => {

    await fetch(DATABASE_URL + 'api/student/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
    // navigate('/')    
  };


  return (
    <form className='flex registerForm' onSubmit={handleSubmit(onSubmit)}>
      <h3>Create an account today to track your progress</h3>
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
