import React from 'react';
import './App.css';
import Header from './components/Header/Header';
// import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import { useTelegram } from './hooks/useTelegram';
import Button from './components/Button/Button';
// import {Route, Routes} from 'react-router-dom';


function App() {

  const { WebAppButton } = useTelegram()

  return (
    <div className="App">
      <Header/>
      <Form />
      <Button onClick={WebAppButton}></Button>
      {/* <Routes>
        <Route index element={<ProductList />}/>
        <Route path={'form'} element={<Form />}/>
      </Routes> */}
    </div>
  );
}

export default App;
