import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Products } from './pages/products/Products';
import { About } from './pages/about/About';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
