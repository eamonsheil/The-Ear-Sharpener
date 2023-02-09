import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import config from "./auth_config.json"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <Auth0Provider
            domain={import.meta.env.PROD ? config.domain : import.meta.env.VITE_AUTH_DOMAIN as string}
            clientId={import.meta.env.PROD ? config.cliendId : import.meta.env.VITE_AUTH_CLIENTID as string}
            redirectUri={window.location.origin}
        >
            <App />
        </Auth0Provider>
    </>
);
