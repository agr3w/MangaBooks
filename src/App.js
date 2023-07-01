import './reset.css';
import '../src/style.css';
import Nav from './Componentes/Navegacao';
import Banner from './Componentes/Banner';
import Carrosel from './Componentes/Carrosel';
import Topicos from './Componentes//Topicos';
import Contato from './Componentes/Contato';
import Rodape from './Componentes/Rodape';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Carrosel />
      <Topicos />
      <Contato />
      <Rodape />
    </div>
  );
}

export default App;
