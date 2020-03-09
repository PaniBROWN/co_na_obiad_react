import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MenuList from './components/MenuList.jsx';

import "./sass/main.scss";
// import './App.css';

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MenuList} />
        </Switch>
      </BrowserRouter>
    </div>
   )
}
  

export default App;
