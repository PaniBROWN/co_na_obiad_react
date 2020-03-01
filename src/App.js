import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MenuList from './components/MenuList.jsx';


import './App.css';

function App() {
  return (
    <>
      <div> 
        jestem  App
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MenuList} />
        </Switch>
      </BrowserRouter>
    </>
   )
}
  

export default App;
