import './App.css';

import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import  { Home } from './Pages/Home'
import { About } from './Pages/About'

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />

      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
