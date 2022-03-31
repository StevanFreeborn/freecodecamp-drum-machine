import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
// import * as ReactDOMClient from 'react-dom/client';

// const root = ReactDOMClient.createRoot(
//   document.getElementById("root")
// );

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// using the legacy api allows the freeCodeCamp test suite to pass.
// attempts to use the above new root api for React 18 causes test
// suite to fail.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
