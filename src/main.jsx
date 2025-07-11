/*
 * main.jsx
 *
 * Entry point for the React portfolio application. Mounts the App component to the DOM and applies global styles.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

/**
 * Bootstraps the React application and renders it into the root DOM node.
 * Uses React.StrictMode for highlighting potential problems in development.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
