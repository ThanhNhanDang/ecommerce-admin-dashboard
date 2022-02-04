import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import ProductList from "../pages/productList/ProductList";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/customers" component={Customers} />
      <Route path="/products" component={ProductList} />
      <Route path="/products/:productId" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
