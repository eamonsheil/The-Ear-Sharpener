import * as React from 'react';
import { Navigate } from 'react-router-dom';

export interface IProtectedRoutesProps {
    user:any
    children:any
}

export function ProtectedRoutes ({user, children}: IProtectedRoutesProps) {
  
  if (!user) return children;
  else {
    return <Navigate to='/login' replace />
  }
}
