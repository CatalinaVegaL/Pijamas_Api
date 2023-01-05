import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Home/Index"
import { ProductList } from "./Products/Index"

export const Pages = () => {
  return (
    <section>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/productos" exact component={ProductList} />
      </Switch>
    </section>
  )
}
