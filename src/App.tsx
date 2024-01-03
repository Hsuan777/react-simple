import Count from './Count.tsx'
import Form from './Form.tsx'
import List from './List.tsx'
import './App.css'
import { HashRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Logo';

function App() {
  return (
    <>
      <div className="container">
        <Logo title="Welcom to Vite + React!" />
        <nav className="d-flex justify-content-center mb-3">
            <a href="#/">Count</a>
            <a href="#/form" className="mx-5">Form</a>
            <a href="#/list">List</a>
        </nav>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Count />} />
            <Route path="/form" element={<Form />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </HashRouter>
        </div>
    </>
  )
}

export default App
