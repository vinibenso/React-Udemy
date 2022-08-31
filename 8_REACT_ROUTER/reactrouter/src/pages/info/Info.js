import { useParams } from "react-router-dom"

export function Info(){
  const { id } = useParams()

  return(
    <div>
      <h1>Mais informacoes so bre o produto: {id}</h1>
    </div>
  )
}