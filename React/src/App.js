import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PaginaCadastro from './components/PaginaCadastro';
import PaginaListaUsuarios from './components/PaginaListaUsuarios';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PaginaCadastro} />
        <Route path="/usuarios" component={PaginaListaUsuarios} />
      </Switch>
    </Router>
  );
}

export default App;
