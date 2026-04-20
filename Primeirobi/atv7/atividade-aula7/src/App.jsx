import './App.css'
import Header from './components/Header'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
	const dadosPost = {
		titulo: 'Minha viagem para a praia',
		autor: 'Maria',
		data: {
			iso: '2025-08-15',
			texto: '15 de agosto de 2025',
		},
		conteudo: [
			'Eu viajei para a praia e foi uma experiência muito boa. O lugar era bonito e tranquilo.',
			'Aproveitei para descansar e conhecer lugares novos. Pretendo voltar novamente no futuro.',
		],
	}

	const postsRelacionados = [
		'Viagem para o campo',
		'Dicas de viagem',
		'Lugares para conhecer',
	]

	return (
		<div className="app-layout">
			<Header tituloBlog="Meu Blog de Viagens" />
			<main>
				<Article
					titulo={dadosPost.titulo}
					autor={dadosPost.autor}
					data={dadosPost.data}
					conteudo={dadosPost.conteudo}
				/>
			</main>
			<Sidebar postsRelacionados={postsRelacionados} />
			<Footer texto="© 2024 - Todos os direitos reservados" />
		</div>
	)
}

export default App