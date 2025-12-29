import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import './styles/responsive.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// تسجيل Service Worker
serviceWorkerRegistration.register();

// قياس أداء التطبيق
reportWebVitals();
