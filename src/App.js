
import Menu from './Components/Menu'
import Rotas from './rotas';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Routes from './rotas'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Menu />
        </header>
        <main>
          <Container fluid>
            <Rotas />
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
