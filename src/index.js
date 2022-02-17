import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Homepage from './components/Homecomponent';
import PersonPage from './components/PersonPage';

ReactDOM.render(
  <React.StrictMode>
     <App />
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Homepage />}/>
      <Route path="/person/:personId" element={<PersonPage/>}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

