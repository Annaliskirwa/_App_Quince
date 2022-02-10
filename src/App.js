import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const HomePage = () => {
  return <>Home Page</>;
};

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={HomePage} />
      </Router>
    </>
  );
};

export default App;