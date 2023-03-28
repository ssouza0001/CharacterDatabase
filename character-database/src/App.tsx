import './App.css';
import Personagem from "./components/Personagem";
import ListaPersonagens from "./components/ListaPersonagens";

function App() {
  return (
    <div className="App">
      <h1>Pesquisar Personagem</h1>
      <Personagem />
      <h1>Rick and Morty</h1>
      <ListaPersonagens />
    </div>
  );
}

export default App;
