
import { useCounterContext } from "../../hooks/useCounterContex"

export function About(){
  const { counter } = useCounterContext()

    return (
        <div className="about">
            <h1>About</h1>
            <p>Valor do counter: {counter}</p>
    </div>
  )
}