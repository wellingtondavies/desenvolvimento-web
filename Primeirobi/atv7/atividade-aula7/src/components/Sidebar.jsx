import './Sidebar.css'

function Sidebar({ postsRelacionados }) {
  return (
    <aside className="sidebar-card">
      <h3>Posts Relacionados</h3>
      <ul className="sidebar-list">
        {postsRelacionados.map((post, index) => (
          <li key={index}>
            <a href="#">{post}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar