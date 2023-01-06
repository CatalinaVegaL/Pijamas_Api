import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Home/Homepage"
import { ProductListF} from "./Products/ProductsListF"
import { ProductListM} from "./Products/ProductsListM"
import { ProductListI} from "./Products/ProductsListI"
import { Cart } from "./Cart/Cart";

//------------------------------------  COMPONENT DEVELOPMENT  ------------------------------------//
export const Pages = () => {
  return (
    <section>
      <Switch>
        //Website routes
        <Route path="/" exact component={Home} />
        <Route path="/productos/femenino" exact component={ProductListF} />
        <Route path="/productos/masculino" exact component={ProductListM} />
        <Route path="/productos/infantil" exact component={ProductListI} />
        <Route path="/carrito" exact component={Cart} />
      </Switch>
    </section>
  )
}
