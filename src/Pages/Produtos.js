import { useState, useEffect } from 'react';
import { dados } from '../img/dados';
import Produto from '../Components/Produto';
import { Container, Row } from 'react-bootstrap';


export default function Produtos() {
        
        const [produtos, setProdutos] = useState([]);
    
        useEffect(async () => {
                const answer  = await fetch("http://localhost/full_stack_eletronicos/FullStackEletronicos/php/api/produtos.php")
                const data = await answer.json()
                setProdutos(data);
                console.log(data);
        }, []);
    
        return (
            <Container>
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

    