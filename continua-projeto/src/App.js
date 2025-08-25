import './App.css';
import React, { useState } from 'react';
import logo from '../src/assets/images/logo_compras.png';
import AdicionarProduto from './components/AdicionarProduto';
import ListaDeProdutos from './components/ListadeProdutos';


function App()  {
  
  
  const [produtos, setprodutos] = useState(['Mouse', 'Teclado', 'Monitor']);

  
  const adicionarUsuario = (nome) => {

    const produto = nome.trim();

    
    if (produtos.includes(produto)) {
      alert('Produto já existe na lista');

      return;

    } 

      
    
   

   
    setprodutos([...produtos, produto]);
  };


  return (

    <div classname="App" >
      <img src={logo} className="logo" alt="Logo compras" />
      <h1>Lista de Produtos Digital</h1>
      <AdicionarProduto onAdd={adicionarUsuario} />
      
      

    
  
      <hr />
      <h2>Lista de Produtos</h2>
      <ol>
        {produtos.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ol>
      <h3>
        Total de produtos: {produtos.length}
      </h3>
    </div>
      );

    
}




export default App;
