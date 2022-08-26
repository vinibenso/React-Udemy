import './App.css';
import City from './assets/city.jpg'
import { ConditionalRender } from './components/ConditionalRender';

import { ListRender } from './components/ListRender';
import { ManageData } from './components/ManageData';
import { ShowUnseName } from './components/ShowUserName';
import { useState } from 'react';
import { CarDetails } from './components/CarDetails';
import { Container } from './components/Conteiner';
import { ExecuteFunction } from './components/ExecuteFuncion';

function App() {

  const [userName] = useState(" Paula")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", km: 0, newCar: true},
    {id: 2, brand: "Porsche", color: "Prata", km: 1850, newCar: false},
    {id: 3, brand: "Lamborguini", color: "Preto", km: 81510, newCar: false}
  ]

  function showMessage(){
    console.log("Evento componente pai")
  }

  return (
  
    <div className="App">
   
          <h1>Avançando no React</h1>

          <div>
            <img src="/image.jpg" alt="Paisagem" />
          </div>

          <div>
            <img src={City} alt="Cidade" />
          </div>

          <ManageData />
          <ListRender />
          <ConditionalRender />
          <ShowUnseName name={userName} />
          <CarDetails brand="VW" km={100000} color="azul" newCar={false}/>
          <CarDetails brand="FORD" km={0} color="vermelha" newCar={true}/> <CarDetails brand="FIAT" km={4500} color="branco" newCar={false}/>
          
         {/*loop em arry de objetos*/}
          {cars.map((car) => (
            <CarDetails
              key={car.id}
              brand={car.brand}
              color={car.color}
              km={car.km} 
              newCar={car.newCar}/>
          ))}

          {/*Container*/}

            <Container myValue="testing">
              <p>Conteudo escrito no pai</p>
            </Container>

          {/*Executar funçao */}
            <ExecuteFunction myFunction={showMessage} />

    </div>
  );
}

export default App;
