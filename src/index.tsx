import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import StoreProvider from './store/storeProvider';
import App from './app';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider>
            <Router basename={process.env.PUBLIC_URL}>
                <App />
            </Router>
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example, reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
