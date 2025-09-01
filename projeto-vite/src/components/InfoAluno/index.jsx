// src\components\InfoAluno\index.jsx

import './style.css';

function InfoAluno() {
    const nome = "Aquino Santos";
    const idade = 23;
    const curso = "Desenvolvimento de sistemas";
  return (
    <div className="info-aluno">
      <h2>Informações do Aluno</h2>
      <p>Nome: {nome}</p>
      <p>Idade: {idade} anos </p>
      <p>Curso: {curso}</p>
    </div>
  );
}


export default InfoAluno;

