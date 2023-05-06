import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';

import { HomeContainer, 
         CarouselContainer, 
         SlideButton } from "./styles";

import { Location } from '../Location';
import { About } from '../About';
import { Consultaion } from '../Consultation';
import { Faq } from '../Faq';

export function Home() {
    return (
            <HomeContainer>
                <CarouselContainer>
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
                        <p>Juntos, buscando melhorar sua qualidade de vida.</p>
                        <Link to = '/sobre'>
                            <SlideButton 
                                iconExists={false}
                                className
                                children="Saiba mais"
                            />
                        </Link>
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
                        <p>Área da medicina destinada ao diagnóstico e tratamento das doenças do aparelho locomotor.</p>
                        <Link to = '/reumaotlogia'>
                            <SlideButton
                                iconExists={false}
                                className
                                children="Reumatologia"
                            />
                        </Link>
                        </Carousel.Caption>
                    </Carousel.Item>

                </CarouselContainer>
                <About />
                <Consultaion />
                <Faq />
                <Location />
            </HomeContainer>
    )
}