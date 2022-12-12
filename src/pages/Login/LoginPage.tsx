import * as React from 'react';
import { Login } from './Login';

export interface ILoginPageProps {
}

export function LoginPage (props: ILoginPageProps) {
  return (
    <div>
      <h3>Login or Sign up to get started!</h3>
      <Login/>
    </div>
  );
}
