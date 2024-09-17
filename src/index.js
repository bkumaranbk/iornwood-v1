import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TranslationProvider } from 'react-google-multi-lang';

// Ensure API key is set in your environment
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <TranslationProvider apiKey={process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY} defaultLanguage="en">
    <App />
  </TranslationProvider>

);
