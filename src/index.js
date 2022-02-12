import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Homecomponent";

const App = () => {
  return (
    <>
      <Router>
        <Route path="/" element={Homepage} />
      </Router>
    </>
  );
};

export default App;