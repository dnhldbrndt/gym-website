import React from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Feature from './components/Feature'
import Offer from './components/Offer'
import './assets/styles.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Header/>
        <Feature/>
        <Offer/>
      </header>
    </div>
  );
}

export default App;
