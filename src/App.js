import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <div className="sm">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;