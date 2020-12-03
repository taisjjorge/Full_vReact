import { Carousel } from 'react-bootstrap';


function BoasVindas() {
    return (
        <Carousel>
            
            <Carousel.Item interval={2000}>
                    <img class="d-block w-100" src="https://image.freepik.com/fotos-gratis/celulares-antigos-no-vermelho_136401-691.jpg" alt="melhores marcas"/>
                <Carousel.Caption>
                    <h3>As melhores marcas</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img class="d-block w-100" src="http://www.acidadevotuporanga.com.br/Images/Noticia/Media/00000003223994818782200026984.jpg"/>
                <Carousel.Caption>
                    <h3>Pelos melhores preços</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default BoasVindas;