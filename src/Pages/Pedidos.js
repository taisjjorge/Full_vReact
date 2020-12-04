import {useState} from 'react';
import {Form, Button, Row} from 'react-bootstrap';

export default function Pedidos() {
    const [ form, setForm ] = useState({
        nome:"",
        endereco:"",
        telefone:"",
        valor:"",
        quantidade:"",
        preco_final:""
    })

    const controleMudanca = (evento) => {
        console.log(evento.target.value)
        console.log(form)
        setForm({
            ...form, //para preservar o formulário acima
            [evento.target.id]: evento.target.value
        })
        console.log(form);
    }

    const controleEnvio = async (evento) => {
        evento.preventDefault();
        // console.log("Submit")
        const preco_final = parseFloat(form.valor) * parseFloat(form.quantidade); //parseFloat para converter o valor que pode ser dado com ,
        // console.log(preco_final);
        document.getElementById("preco_final").value = `R$ ${preco_final}`;
   
        const json = JSON.stringify(form);

        const opcoes= {
            method:'POST',
            headers: { 'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: json
        }

        const resposta = await fetch("http://localhost/full_stack_eletronicos/FullStackEletronicos/php/actions/pedidos.php", 
            opcoes);
        const dados = await resposta.json()
        console.log(dados);
   
   
    }

    return(
        <Row>
            <div className="col-lg-6 col-md-6 mx-auto">
                <Form onSubmit={controleEnvio}>
                    <h4>Fazer pedidos</h4>
                    <Form.Group>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="nome" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Endereço:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="endereco" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Produto:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="produto" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="telefone" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Valor unitário:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="valor" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="quantidade" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Preço final:</Form.Label>
                        <Form.Control disabled type="text" id="preco_final" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Cadastrar
                    </Button>
                </Form>
            </div>
        </Row>
    )
}