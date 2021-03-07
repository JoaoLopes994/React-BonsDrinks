import './App.css';
import Home from './componentes/Home';
import Footer from './componentes/Footer/Rodape'
import Botao from './componentes/Botao/Botao';
import Contato from './componentes/Contato/formulario-contato';
import Header from './Componentes/Header/navbarHeader';
import Imagemcontato from './Componentes/Imagem/ImagemContato';


function App() {
  return (
    <div className="App-js">

      <navbarHeader />
      <Botao />
      <Contato />
      <Imagemcontato />
      <Footer />

    </div>
  );
}

export default App;
