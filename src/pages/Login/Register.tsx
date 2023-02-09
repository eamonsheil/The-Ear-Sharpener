import './login.css';
import { useAuth0 } from '@auth0/auth0-react';

export function Register() {
  const { loginWithRedirect } = useAuth0()


  return (
    <form className='flex registerForm'>
      <h3>Create an account today to track your progress</h3>
      
      <button onClick={() => loginWithRedirect()}>Log In With Google</button>

    </form>
  );
}
