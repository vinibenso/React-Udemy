import './App.css';
import City from './assets/city.jpg'
import { ManageData } from './components/ManageData';

function App() {
  return (
    <div className="App">
   
          <h1>Avançando no React</h1>

          <div>
            <img src="/image.jpg" alt="Paisagem" />
          </div>

          <div>
            <img src={City} alt="Cidade" />
          </div>

          <ManageData/>
      
    </div>
  );
}

export default App;
