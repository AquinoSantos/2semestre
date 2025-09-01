import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mensagem from './components/Mensagem'
import InfoAluno from './components/InfoAluno'
import InfoCurso from './components/InfoCurso'

function App() {
  const [count, setCount] = useState(0)

  return (
    // Fragment.
    <>
      <h1>Aula ReactJS</h1>
      <Mensagem/>
      <hr />
      <InfoAluno/>
      <hr />
      <InfoCurso/>
      

    </>
  )
}

export default App
