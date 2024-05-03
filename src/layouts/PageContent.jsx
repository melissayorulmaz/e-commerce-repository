import React from "react";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import { Route, Switch } from "react-router-dom";

function PageContent() {
  return (
    <div>
     <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/productdetailpage">
          <ProductDetailPage />
        </Route>
      </Switch>
    </div>
  );
}

export default PageContent;
