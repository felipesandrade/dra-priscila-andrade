import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import { HomeContainer, Image, SlideButton } from "./styles";
import  DraRosaPriscila from '../../assets/img-dra-rosa-priscila-principal.png';


export function Home() {
    return (
            <HomeContainer>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../../src/assets/1.jpg"
                            height = "475"
                            width = "1425"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Dra Rosa Priscila</h3>
                        <h5>Reumatoligista</h5>
                        <p>Juntos, buscando melhorar sua a qualidade de vida.</p>
                        <Link to = '/sobre'><SlideButton>Saiba mais</SlideButton></Link>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="../../src/assets/2.jpg"
                        height = "475"
                        width = "1425"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>O que é Reumatologia?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to = '/reumaotlogia'><SlideButton>Reumatologia</SlideButton></Link>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
                {/* <img src={DraRosaPriscila} title="Foto Principal Dra Rosa Priscila" /> */}
                {/* <Image /> */}
                {/* <div>
                    <h1>Dra. Rosa Priscila</h1>
                    <h2>Reumatologista</h2>
                </div> */}
            </HomeContainer>
    )
}