import { useState, useEffect } from 'react';
import { dados } from '../img/dados';
import Produto from '../Components/Produto';
import { Container, Row } from 'react-bootstrap';


export default function Produtos() {
    const [ produtos, setProdutos ] = useState([]);

    // const url = "http://localhost/getDados/produtos.php"
    // function getJson() {
    //             fetch(url).then(response => response.json())
    //                         .then(dados => console.log(dados))
    // }

    const mapeamento = dados.map(item => <Produto categoria={item.nome} nome={item.descricao} preco={item.preco} imagem={item.imagem} />)

    return(
        <Container>
            <Row>
                { mapeamento }
            </Row>
        </Container>
    )
}