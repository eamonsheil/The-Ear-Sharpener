import { useAuth0 } from '@auth0/auth0-react';

export default function OauthLogin () {
    const { loginWithRedirect } = useAuth0()

    const handleLogin = () => {
        loginWithRedirect()
    }
  return <button className='nav-link' onClick={handleLogin}>Log In With Google</button>
}

export function LogoutButton() {
    const { logout } = useAuth0();
  
    return <button onClick={() => logout()}>Log Out</button>;
  };