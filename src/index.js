import React from 'react';
import ReactDOM from 'react-dom';
import { AuthContextProviderCustom } from './components/context/store/auth-context';

import './index.css';
import App from './App';

ReactDOM.render(
  <AuthContextProviderCustom>
    <App />
  </AuthContextProviderCustom>,
  document.getElementById('root')
);
