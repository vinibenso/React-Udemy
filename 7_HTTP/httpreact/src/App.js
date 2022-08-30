import './App.css';

import { useState, useEffect } from 'react'

// 4 - custom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

export function App() {
  const [products, setProducts] = useState([])

  // 4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url)

  const [name, setName] = useState([])
  const [price, setPrice] = useState([])

  //1 - resgatando dados com uma chamada assincrona
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url)

  //     const data = await res.json()

  //     setProducts(data)
  //   }
  //   fetchData()
  // }, []);

  // 2 - Adicionando produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    };

    //   const res = await fetch(url, {
    //     method: 'POST',
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(product)
    // })

    // // 3 - Carregamento Dinamico
    // const addedProduct = await res.json()

    // setProducts((prevProducts) =>[...prevProducts, addedProduct])

    // 5 - refatorando o post
    httpConfig(product, "POST")

    setName("")
    setPrice("")
  };

  // 8 - deletando item
  const handleRemove = (id) => {
    httpConfig(id, "DELETE")
  }
  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/*6 - loading*/}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!loading && 
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price}
            <button
            onClick={() => handleRemove(product.id)}
            >
              Excluir Item
            </button>
          </li>
        ))}
      </ul>
      }
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
            Preço:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/*6 - State de loading no post */}
          {loading && <input type="submit"  disabebled value="Aguarde" /> }
          {!loading && <input type="submit" value="Criar" /> }
        </form>

      </div>

    </div>
  );
}


