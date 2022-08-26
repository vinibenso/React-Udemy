import { useState } from 'react'

export function ListRender() {
  const [list] = useState(["Vini", "Paula", "Cleusa"])

  const [users, setUsers] =  useState([
    {id: 1, name: "John", age: 31},
    {id: 2, name: "Jane", age: 32},
    {id: 3, name: "Jeff", age: 33},
  ]);

  const deleteRandon = () => {
    const randomNumber = Math.floor(Math.random()*4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id )
    })};

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}, {user.age}</li>
        ))}
      </ul>

      <button onClick={deleteRandon}>
        Delete rando user
      </button>
    </div>
  )
}