import Cabecalho from "./components/Cabecalho"

export default function App() {
  const nome = 'João'


  return (
    <main>
      <Cabecalho texto="Meu Site " />  
      {/* <Cabecalho texto="Bem-vindo ao meu site!" /> */}
      <p>Olá, {nome}!</p>
    </main>
  )
}