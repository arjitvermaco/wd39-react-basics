// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// 1. Import React package
import React from "react";
// 2. Import React DOM Package 
import ReactDOM from 'react-dom/client'
//Import the component
import App from './App'
import './index.css'
// 3. Create A DOM 
const appRoot = ReactDOM.createRoot(document.getElementById('main'))
// 4. Put Something in the DOM to display 




appRoot.render(
    // <App></App>
    <App/>
)
