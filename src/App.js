import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MenuList from './components/Menu/MenuList';
import Form from './components/Form/Form';
import {Route, Routes} from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<MenuList />}/>
        <Route path={'form'} element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
