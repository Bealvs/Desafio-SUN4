import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Questao_4 } from './pages/Questao_4';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Questao_4 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
