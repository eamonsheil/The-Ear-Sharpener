import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react'
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserContextProvider } from './context/user.context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <UserContextProvider>
            <App />        
        </UserContextProvider>
        <Analytics/>
    </>
);
