import React from "react";
import "boxicons";
import { Header } from "./Components/Header/Header";
import { Pages } from "./Components/Pages";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DataProvider } from "./Context/Dataprovider";

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <Pages />
      </Router>
    </DataProvider>
  );
}

export default App;
