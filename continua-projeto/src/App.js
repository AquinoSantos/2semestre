import './App.css';
import React, { useState } from 'react';

function App()  {
  
  const [produto, setproduto] = useState('');

  
  const [produtos, setprodutos] = useState(['Maça','Uva','Feijão']);

  
  const adicionarproduto = () => {

    
    if (produtos.includes(produto)) {
      alert('Produto já existe na lista');

      return;

    } else if (produto.trim() === '') {
      alert('Produto não encontrado');
      return;


    }  
    
   

   
    setprodutos([...produtos, produto]);
    setproduto('');
  };


  return (

    <div >
      <h1>Lista de Compras Digital</h1>
      
      <input 
        type="text" 
        value={produto} 
        onChange={(e) => setproduto(e.target.value)} 
        placeholder="Digite o produto que deseja adicionar a lista"
      />



      <button onClick={adicionarproduto}>Adicionar</button>
    
      
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
