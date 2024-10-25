import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';


function App() {
  const {onToggleButton} = useTelegram()

  return (
    <div className="App">
      <Header/>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
