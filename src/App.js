import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import LayoutRoute from "./LayoutRoute";
import LandingPage from "./LandingPage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import GuestLayoutRoute from "./GuestLayoutRoute";
import PrivateLayoutRoute from "./PrivateLayoutRoute";
import SettingsPage from "./SettingsPage";
import AboutPage from "./AboutPage";
import ShowPage from "./ShowPage";
import DashboardPage from "./DashboardPage";
import Addproperty from "./Addproperty";


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <LayoutRoute path='/' exact={true} component={LandingPage}/>
        <LayoutRoute path='/about' exact={true} component={AboutPage}/>
        <LayoutRoute path="/find/:id" exact={true} component={ShowPage}/>
        <PrivateLayoutRoute path='/dashboard' exact={true} component={DashboardPage}/>
        <PrivateLayoutRoute path='/add' exact={true} component={Addproperty}/>
        <PrivateLayoutRoute path="/settings" exact={true} component={SettingsPage} />
        <GuestLayoutRoute path="/signup" exact={true} component={SignUpPage} />
        <GuestLayoutRoute path="/login" exact={true} component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;