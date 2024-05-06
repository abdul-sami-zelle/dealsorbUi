import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './fonts.css'
import 'aos/dist/aos.css'; // Import the AOS styles
import AOS from 'aos'; // Import the AOS library
import store from './stateManagement/store'

AOS.init();

import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

