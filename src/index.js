import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import './index.css';
import App from './App';
import { Provider } from './context/context';

ReactDOM.render(
    <SpeechProvider appId='956d878e-b66b-4498-8bc4-e2425f2b6e06' language='en-US'>
    <Provider>
    <App />
    </Provider>
    </SpeechProvider>
, document.getElementById('root'));
