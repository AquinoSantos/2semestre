import './App.css';
import React, { useState } from 'react';

function App()  {
  // Cria uma variavel e um setter ( forma de adicionar dados) para o usuario.
  const [usuario, setUsuario] = useState('');

  // Cria uma variavel e um setter ( forma de adicionar dados) para a lista de usuarios.
  const [usuarios, setUsuarios] = useState(['Marta', 'João', 'Maria']);

  // Função para veirificar se o usuario ja existe e adiciona-lo à lista.
  const adicionarUsuario = () => {

    // se o usuario ja existir, exibe um alerta e não adiciona.
    if (usuarios.includes(usuario)) {
      alert('Usuário já existe');

      return;

    } else if (usuario.trim() === '') {
      alert('Campo vazio');
      return;


    }  
    
   

   //Se nao existir, adiciona o usuario à lista e limpa o campo de entrada.
   // adiciona todos os usuarios existentes e o novo usuario.  
    setUsuarios([...usuarios, usuario]);
    setUsuario('');
  };


  return (

    <div className="App">
      <h1>Adicionar Usuarios</h1>
      
      <input 
        type="text" 
        value={usuario} 
        onChange={(e) => setUsuario(e.target.value)} 
        placeholder="Digite um nome de usuário"
      />



      <button onClick={adicionarUsuario}>Adicionar</button>
    
      
      <hr />
      <h2>Lista de Usuários</h2>
      <ol>
        {usuarios.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ol>
    </div>
      );

    
}




export default App;
