import React from "react";

import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
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
      </Switch>
    </div>
  );
}

export default PageContent;
