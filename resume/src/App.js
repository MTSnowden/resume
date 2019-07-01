import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/Nav';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />

    </div>
  );
}

export default App;
