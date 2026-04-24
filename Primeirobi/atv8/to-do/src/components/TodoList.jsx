import TodoItem from './TodoItem'
import './TodoList.css'

function TodoList({ tarefas, aoRemoverTarefa }) {
  if (tarefas.length === 0) {
    return <p className="empty-message">Nenhuma tarefa cadastrada.</p>
  }

  return (
    <ul className="task-list">
      {tarefas.map((tarefa) => (
        <TodoItem
          key={tarefa.id}
          tarefa={tarefa}
          aoRemoverTarefa={aoRemoverTarefa}
        />
      ))}
    </ul>
  )
}

export default TodoList
