import './TodoForm.css'

function TodoForm({ valor, aoAlterar, aoEnviar }) {
  return (
    <form className="todo-form" onSubmit={aoEnviar}>
      <input
        type="text"
        placeholder="Digite uma tarefa..."
        value={valor}
        // Input controlado: o valor sempre vem do estado do componente pai.
        onChange={(evento) => aoAlterar(evento.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default TodoForm
