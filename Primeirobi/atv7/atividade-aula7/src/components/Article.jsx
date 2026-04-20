import './Article.css'

function Article({ titulo, autor, data, conteudo }) {
  return (
    <article className="article-card">
      <h2>{titulo}</h2>
      <p className="article-meta">Por {autor}</p>
      <time className="article-date" dateTime={data.iso}>{data.texto}</time>

      {conteudo.map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
      ))}
    </article>
  )
}

export default Article