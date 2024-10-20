import React from 'react';
import { useEffect } from 'react';
import './App.css';
import WebApp from '@twa-dev/sdk';


function App() {

  useEffect(() => {
    WebApp.ready()
  }, [])

  const onClose = () => {
    WebApp.close()
  }
  return (
    <div className="App">
      <button onClose={onClose}>X</button>
    </div>
  );
}

export default App;
