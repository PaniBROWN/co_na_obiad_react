import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MenuList from "./components/MenuList.jsx";
import Navigation from "./components/Navigation";
import RecepieForm from "./components/RecepieForm";

import "./sass/main.scss";
// import './App.css';

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={MenuList} />
          <Route exact path="/dodaj" component={RecepieForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
