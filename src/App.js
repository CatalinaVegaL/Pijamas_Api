import React from 'react'
import 'boxicons';
import { Header } from './Components/Header/Index';
import {Pages} from "./Components/Pages";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() { 
  return (
    <div className="App">
      <Router>
        <Header/>
        <Pages/>
      </Router>
    </div>
  );
}

export default App;
