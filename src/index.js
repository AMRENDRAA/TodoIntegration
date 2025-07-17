import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NewPage from './Newpage';
import Mobile from './Mobile';
import Form from './Form';
import ClickTracker from './ClickTracker';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <App /> */}

     {/* <Form /> */}

     
     <ClickTracker />
  
   
    {/* <NewPage/> */}
      {/* <Mobile/>
  */}

  </React.StrictMode> 
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
