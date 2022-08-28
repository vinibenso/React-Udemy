import './App.css';
import { MyComponent } from './components/MyComponent';

function App() {
  const redTitle = false;
  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p> Esse é o pragragrafo do App porem ele pegou o style do component</p>
  
      <h2 className={redTitle ? "red-title" : "title"}> 
        Este titulo vai ter classe dinamica
      </h2>
    </div>
  );
}

export default App;
