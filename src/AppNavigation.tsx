import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetailsPage from "./pages/CountryDetailsPage";

const AppNavigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/country-details/:countryName"
          component={CountryDetailsPage}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default AppNavigation;
