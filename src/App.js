import React from 'react';
import { useEffect } from 'react';
import './App.css';
import WebApp from '@twa-dev/sdk';
import Header from './components/Header/Header';


function App() {

  useEffect(() => {
    WebApp.ready()
  }, [])

  
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
