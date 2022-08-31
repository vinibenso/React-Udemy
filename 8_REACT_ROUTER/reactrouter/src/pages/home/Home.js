import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './Home.css'


export function Home() {
  // 3 - Carregamentod e daddos
  const url = 'http://localhost:3000/products'

  const { data: items, loading, error } = useFetch(url)
  return (
    <div>
      <h3>Produtos</h3>
      {error && <p>{error}</p>}
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$ {item.price}</p>
              {/* 4 - Rota Dinamica*/}
              <Link to={`/products/${item.id}`}>
                Detalhes
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}