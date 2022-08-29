import "./GameOver.css"

export function GameOver({retry}) {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retry}>
        Finalizar Jogo
      </button>
    </div>
  )
}