import React from "react";
import "./App.css";
import Nav from "./components/NavBar/Nav";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import { DIALOGS, PROFILE } from "./components/NavBar/constats";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div class="app-wrapper-content">
        <Route path={DIALOGS} render={() => <DialogsContainer />} />
        <Route path={PROFILE} render={() => <Profile />} />
      </div>
    </div>
  );
};

export default App;
