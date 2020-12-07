import { useState, useEffect } from 'react';
import { dados } from '../img/dados';
import Produto from '../Components/Produto';
import { Container, Row, ListGroup } from 'react-bootstrap';


export default function Produtos() {
        
        const [produtos, setProdutos] = useState([]);
    
        useEffect(async () => {
                const answer  = await fetch("http://localhost/full_stack_eletronicos/FullStackEletronicos/php/api/produtos.php")
                const data = await answer.json()
                setProdutos(data);
                console.log(data);
        }, []);
    
        return (

            <Container fluid>
                <Container fluid>
            <ListGroup>
                <ListGroup.Item action onclick="exibirTodos()"  variant="success">
                    Todas as marcas (12)
                </ListGroup.Item>
                <ListGroup.Item action onclick="filtrar('televisao')" variant="success">
                    Motorola (5)
                </ListGroup.Item>
                <ListGroup.Item action onclick="filtrar('celular')" variant="success">
                    Nokia (3)
                </ListGroup.Item>
                <ListGroup.Item action onclick="filtrar('maquinaDeLavar')" variant="success">
                    SonyEricsson (3)
                </ListGroup.Item>
                <ListGroup.Item action onclick="filtrar('geladeira')" variant="success">
                    Siemens (1)
                </ListGroup.Item>
            </ListGroup>
        </Container>

            
                <Row>
                    { produtos && produtos.map(item => <Produto key={item.id} categoria={item.categoria} descricao={item.descricao} 
                    preco={item.preco} imagem={item.imagem}/> )}
                </Row>
            </Container>
        );
    }

        /*const url = "http://localhost/full_stack_eletronicos/FullStackEletronicos/php/api/produtos.php";
        const dados = new FormData(evento.target);
        const cabecalho = { 
            method: "POST", 
            body: dados, 
            };
        
        const resposta = await fetch(url, cabecalho);
        const resultado = await resposta.json()

        console.log(resultado); */

    
         //const [ produtos, setProdutos ] = useState([]);

//      //const url = "http://localhost/full_stack_eletronicos/FullStackEletronicos/php/api/produtos.php"
//      function getJson() {
//                  fetch(url).then(response => response.json())
//                              .then(dados => console.log(dados))
//      }

//     const mapeamento = dados.map(item => <Produto categoria={item.nome} nome={item.descricao} preco={item.preco} imagem={item.imagem} />)

//     return(
//         <Container>
//             <Row>
//                 { mapeamento }
//             </Row>
//         </Container>
//     )
// }

    