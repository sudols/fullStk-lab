import './App.css';

function B(a) {
	return <h1>book title is {a.title}</h1>;
}

function Lib() {
	return (
		<div>
			<h2>Uni's library</h2>
			<B title="html" />
		</div>
	);
}

function App() {
	return (
		<div>
			<Lib />
		</div>
	);
}

export default App;
