// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
// import { extendTheme } from "@chakra-ui/react";
// import { theme } from './Styles/index'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
