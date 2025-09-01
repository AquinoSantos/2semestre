// src\components\InfoCurso\index.jsx

import './style.css';

function InfoCurso() {

    const nomeCurso = "Programação de Aplicativos";
    const cargaHoraria = "90";
    const unidade = "Presencial";
    const local = "SENAI Dendezeiros";
    const dataInicio = "04/08/2025";
    const dataTermino = "22/12/2026";

  return (
    <div className="info-curso">
      <h2>Dados do Curso</h2>
      <p>Nome do Curso: {nomeCurso}</p>
      <p>Carga Horaria: {cargaHoraria} horas</p>
      <p>Unidade: {unidade}</p>
      <p>Local: {local}</p>
      <p>Data de Início: {dataInicio}</p>
      <p>Data de Término: {dataTermino}</p>
    </div>

  );
}

export default InfoCurso;