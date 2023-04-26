import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';

import { HomeContainer, 
         SlideButton } from "./styles";

import { Location } from '../Location';
import { About } from '../About';


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
                <About />
                <Location />
            </HomeContainer>
    )
}