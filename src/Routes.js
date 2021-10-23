import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//get all components
import Home from "./Components/Home/Home";
import { Profile } from "./Components/Profile/Profile";
import Login from "./Components/AdminLogin/AdminLogin";
import Signup from "./Components/Signup/Signup";
import Services from "./Components/Services/Services";
import { Category } from "./Components/Category/Category";
import { FireService } from "./Components/FireService/FireService";
import { PoliceStation } from "./Components/PoliceStation/PoliceStation";
import { ServiceProfile } from "./Components/ServiceProfile/ServiceProfile";
import { SignIn } from "./Components/SignIn/SignIn";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/Services" component={Services} />
        <Route path="/Category" component={Category} />
        <Route path="/admin/login" component={Login} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/signup" component={Signup} />
        <Route path="/FireService" component={FireService} />
        <Route path="/PoliceStation" component={PoliceStation} />
        <Route path="/ServiceProfile" component={ServiceProfile} />

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
