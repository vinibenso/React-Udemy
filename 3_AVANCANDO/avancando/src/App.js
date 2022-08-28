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
import { Message } from './components/Message';
import { ChangeMessageState } from './components/ChangeMessageState';
import { UserDetails } from './components/UserDetails';

function App() {

  const [userName] = useState(" Paula")

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", km: 0, newCar: true },
    { id: 2, brand: "Porsche", color: "Prata", km: 1850, newCar: false },
    { id: 3, brand: "Lamborguini", color: "Preto", km: 81510, newCar: false }
  ]

  function showMessage() {
    console.log("Evento componente pai")
  }

  const [message, setMessage] = useState()

  const handleMessage = (msg) => {
    setMessage(msg)
  }
  
  // eslint-disable-next-line no-lone-blocks
  {/*Desafio 44 */}
  const users = [
    { id: 1, name: "vini", job: "programador", age: 36 },
    { id: 1, name: "paula", job: "designer", age: 18 },
    { id: 1, name: "Joao", job: "estudante", age: 15 }
  ]

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
      {/*Props */}
      <ShowUnseName name={userName} />
      {/*Destructuring aula 38*/}
      <CarDetails brand="VW" km={100000} color="azul" newCar={false} />
      <CarDetails brand="FORD" km={0} color="vermelha" newCar={true} /> <CarDetails brand="FIAT" km={4500} color="branco" newCar={false} />

      {/*loop em arry de objetos*/}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar} />
      ))}

      {/*Container*/}

      <Container myValue="testing">
        <p>Conteudo escrito no pai</p>
      </Container>

      {/*Executar funçao */}
      <ExecuteFunction myFunction={showMessage} />

      {/*State Lift*/}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />

      {/*Desafio 44 */}
        {users.map((user)=> (
          <UserDetails
            key={user.id}
            name={user.name}
            job={user.job}
            age={user.age}
          />
        ))}








    </div>
  );
}

export default App;
