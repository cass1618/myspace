import logo from './logo.svg';
import './App.css';
import React from "react";
import { info } from 'node-sass';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Photo/>
      <Buttons/>
      <Info/>
      <Music/>
      <Friends/>
      <Posts/>
    </React.Fragment>
  );
}

export default App;
