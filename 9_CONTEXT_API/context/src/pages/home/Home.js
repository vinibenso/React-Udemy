import "./Home.css"

// import { useContext } from "react"
// import { CounterContext } from "../../context/CounterContext"
import ChangeCounter from "../../components/changeCounter/ChangeCounter"

// 4 - refatorando hook
import { useCounterContext } from "../../hooks/useCounterContex"

// 5 - context mais complexo
import { useTitleColorContext } from "../../hooks/useTitleColorContext";

export function Home() {
  // const { counter } = useContext(CounterContext)
  const { counter } = useCounterContext();

  // 5 - context mais complexo
  const { color, dispatch } = useTitleColorContext();

  // 6 - alterando state complexo
  const setTitleColor = (color) => {
    dispatch({ type: color })
  }

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - Alterando valor do contexto*/}
      <ChangeCounter />
      {/* 6 - alterando state complexo */}
      <div>[
        <button onClick={() => setTitleColor("RED")}>
          Vermelho
        </button>
        <button onClick={() => setTitleColor("GREEN")}>
          Verde
        </button>
      </div>
    </div>
  )
}