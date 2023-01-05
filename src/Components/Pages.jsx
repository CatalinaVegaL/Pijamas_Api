import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Home/Homepage"
import { ProductList } from "./Products/ProductsList"
import { Cart } from "./Cart/Cart";

export const Pages = () => {
  return (
    <section>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/productos" exact component={ProductList} />
        <Route path="/carrito" exact component={Cart} />
      </Switch>
    </section>
  )
}
