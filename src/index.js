import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Homepage from './components/Homecomponent';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Homepage />}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);