import React from "react";
import "boxicons";
import { Header } from "./Components/Header/Index";
import { Pages } from "./Components/Pages";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DataProvider } from "./Context/Dataprovider";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Pages />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
