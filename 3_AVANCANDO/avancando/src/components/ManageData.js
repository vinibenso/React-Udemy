import { useState } from 'react'
 
export function ManageData() {

  const [number, setNumber] = useState(15)
 return (
  <div>
    <p>Valor: {number}</p>
    <button onClick={() => setNumber(25)} >
      Mudar
    </button>
  </div>
 )

}