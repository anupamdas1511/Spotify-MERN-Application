import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from './Components/About/About'
import Auth from './Components/Auth/Auth'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path='/About' exact component={About} />
          <Route path='/Auth' exact component={Auth} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
