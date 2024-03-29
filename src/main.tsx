import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <Auth0Provider
            domain={import.meta.env.VITE_AUTH_DOMAIN as string}
            clientId={import.meta.env.VITE_AUTH_CLIENTID as string}
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            <App />
        </Auth0Provider>
    </>
);
