import { useEffect, useState } from 'react'
import './App.css'
import TodoHeader from './components/TodoHeader'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const STORAGE_KEY = 'todo-tasks'

function App() {
  // Carrega as tarefas salvas no navegador na primeira renderizacao.
  const [tarefas, setTarefas] = useState(() => {
    try {
      const tarefasSalvas = localStorage.getItem(STORAGE_KEY)
      if (!tarefasSalvas) return []

      const tarefasConvertidas = JSON.parse(tarefasSalvas)
      return Array.isArray(tarefasConvertidas) ? tarefasConvertidas : []
    } catch {
      return []
    }
  })
  const [valorInput, setValorInput] = useState('')

  useEffect(() => {
    // Mantem o localStorage sincronizado sempre que a lista mudar.
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas))
  }, [tarefas])

  function aoEnviarFormulario(evento) {
    evento.preventDefault()

    const texto = valorInput.trim()
    if (!texto) return

    const novaTarefa = {
      id: Date.now(),
      text: texto,
    }

    setTarefas((tarefasAnteriores) => [...tarefasAnteriores, novaTarefa])
    setValorInput('')
  }

  function aoRemoverTarefa(idTarefa) {
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.filter((tarefa) => tarefa.id !== idTarefa),
    )
  }

  return (
    <main className="todo-app">
      <TodoHeader titulo="Lista de Tarefas" />
      <TodoForm
        valor={valorInput}
        aoAlterar={setValorInput}
        aoEnviar={aoEnviarFormulario}
      />
      <TodoList tarefas={tarefas} aoRemoverTarefa={aoRemoverTarefa} />
    </main>
  )
}

export default App
