export function ChangeMessageState({ handleMessage }) {
  const messages = ["oi", "ola", "opa"]

  return (
    <div>
      <button onClick={() => handleMessage(messages[0])}>
        Mudar mensagem
      </button>
      <button onClick={() => handleMessage(messages[1])}>
        Mudar mensagem
      </button>
      <button onClick={() => handleMessage(messages[2])}>
        Mudar mensagem
      </button>
    </div>
  )
}