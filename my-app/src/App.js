import './App.css'
import HelloWord from './components/HelloWorld'

const name = 'Murilo'

const nname = name.toUpperCase()

function sum(a, b) {
  return a + b
}

const url = 'http://via.placeholder.com/150'

function App() {
  return (
    <div className="App">
      <h1>meu teste</h1>
      <p>Óla, {nname}</p>
      <p>Soma: {sum(10, 30)}</p>
      <img src={url} alt="minha imagem" />
      <HelloWord />
    </div>
  )
}

export default App
