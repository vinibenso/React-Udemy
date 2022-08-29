
import './App.css';
import { MyForm } from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={
          {
          name: "Vinicius",
          email: "vinicius@gmail.com",
          bio: "Sou um programador muito bom!",
          role: "admin"
          }
        } />

    </div>
  );
}

export default App;
