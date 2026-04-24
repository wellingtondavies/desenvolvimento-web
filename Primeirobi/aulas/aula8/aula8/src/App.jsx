import { useEffect, useState } from 'react'
import './App.css'
import Button from './components'

export default function App() {

  const [contador, setContador] = useState(0)
  const [carregando, setCarregando] = useState(true)

  const produtos = [
    { id: 1, nome: 'teclado gamer', preco: 10.99 },
    { id: 2, nome: 'mouse', preco: 19.99 },
    { id: 3, nome: 'monitor', preco: 5.49 },
  ]

  setInterval(() => {
    setCarregando(false)
  }, 5000)

  function incrementar() {
    setContador(contador + 1)
  }
  
  return (
    <main>
      <p>Contador</p>
      <Button funcao={incrementar} texto="Incrementar" />
      <p>{contador}</p>

      <h2>Produtos</h2>
      {carregando ? (
        <p>Carregando...</p>
      ) : (
        produtos.map((produto) => (
          <div key={produto.id}>
            <p>{produto.nome}</p>
            <p>R$ {produto.preco}</p>
          </div>
        ))
      )}



    </main>
    
  )
}