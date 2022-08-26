import { useState } from 'react'

export function ConditionalRender() {
  const [x] = useState(true);

  const [name, setName] = useState("joao")

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim.</p>}

      {name === "Paulo" ? (
        <div>
          O nome é Joao
        </div>
      ) : (
        <div>
          Nome nao encontrado.
        </div>
      )}

        <button onClick={() => setName("Paulo")}>
          Set Name
        </button>
    </div>
  )
}

