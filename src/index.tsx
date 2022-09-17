import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts/fonts.css';
import './fonts/font-awesome.css';
import './fonts/ionicons.css';
import './fonts/flag-icon.min.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';
import App from './App';
import reportWebVitals from './reportWebVitals';
import keycloak from './keycloak';
import { ReactKeycloakProvider } from '@react-keycloak/web';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ReactKeycloakProvider authClient={keycloak}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReactKeycloakProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
