import { Switch, Route } from 'react-router-dom';

import Produtos from './Pages/Produtos'
import Pedidos from './Pages/Pedidos'

function Rotas() {
    return(
        <Switch>
            <Route exact path="/" component={ Produtos } />
            <Route exact path="/pedidos" component={ Pedidos } />
        </Switch>
    )
}

export default Rotas;