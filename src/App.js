import React from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import './assets/styles.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello World!
        <Navbar/>
        <Header/>
      </header>
    </div>
  );
}

export default App;
