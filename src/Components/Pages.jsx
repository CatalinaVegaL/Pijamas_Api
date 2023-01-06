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
        <Route path="/Productos/Femenino" exact component={ProductListF} />
        <Route path="/Productos/Masculino" exact component={ProductListM} />
        <Route path="/Productos/Infantil" exact component={ProductListI} />
        <Route path="/Carrito" exact component={Cart} />
      </Switch>
    </section>
  )
}
