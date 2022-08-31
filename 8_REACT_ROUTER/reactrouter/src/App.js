import './App.css';

// 1 - config react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//components
import { Navbar } from './components/navbar/Navbar';
import { SearchForm } from './components/search/SearchForm';


//pages
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Product } from './pages/product/Product';
import { Info } from './pages/info/Info';
import { Notfound } from './pages/notfound/NotFound';
import { Search } from './pages/search/Search';



export function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      {/*2 - Links com react router*/}
      <BrowserRouter>
        <Navbar />
        {/*9 - Search */ }
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 4 - Rota dinamica */}
          <Route path="/products/:id" element={<Product />} />
          {/*6 - Nested Route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 9 - Search Page */}
          <Route path="/search" element={<Search />} />
          {/*10 - redirect */}
          <Route path="/company" element={<Navigate  to='/about'/>} />

          {/*7 - no match route*/}
          <Route path="*" element={<Notfound />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}


