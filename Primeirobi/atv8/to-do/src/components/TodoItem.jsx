import './TodoItem.css'

function TodoItem({ tarefa, aoRemoverTarefa }) {
  return (
    <li className="task-item">
      <span>{tarefa.text}</span>
      <button type="button" onClick={() => aoRemoverTarefa(tarefa.id)}>
        Remover
      </button>
    </li>
  )
}

export default TodoItem
