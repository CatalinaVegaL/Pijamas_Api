import React from 'react'
import { Header } from './Components/Header/Index';
import { ProductList } from './Components/Products/Index';
import 'boxicons';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ProductList/>
      
    </div>
  );
}

export default App;
