import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import TagManager from 'react-gtm-module';
import './index.css'

const tagManagerArgs = {
  gtmId: 'GTM-TM4MCMC6'
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
