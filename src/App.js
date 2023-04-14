import React from "react";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  

  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  </Router>
  );
};

export default App;
