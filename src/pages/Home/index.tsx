import { Link } from 'react-scroll';
import { Carousel } from 'react-bootstrap';

import { HomeContainer, 
         CarouselContainer, 
         SlideButton } from "./styles";

import { Location } from '../Location';
import { About } from '../About';
import { Consultaion } from '../Consultation';
import { Faq } from '../Faq';
import { Treatment } from '../Treatment';

export function Home() {
    return (
            <HomeContainer>
                <CarouselContainer>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../../src/assets/photo-slide-1.jpg"
                            height = "475"
                            width = "1425"
                            alt="Primeiro slide"
                        />
                        <Carousel.Caption>
                        <h3>Dra Rosa Priscila</h3>
                        <h5>Reumatoligista</h5>
                        <p>Juntos, buscando melhorar sua qualidade de vida.</p>
                        <Link activeClass="active" className="scrollLink" to="about" smooth={true} spy={true} duration={250} title="Sobre mim">
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
                        src="../../src/assets/photo-slide-2.jpg"
                        height = "475"
                        width = "1425"
                        alt="Segundo slide"
                        />

                        <Carousel.Caption>
                        <h3>O que é Reumatologia?</h3>
                        <p>Área da medicina destinada ao diagnóstico e tratamento das doenças do aparelho locomotor.</p>
                        <Link activeClass="active" className="scrollLink" to="treatment" smooth={true} spy={true} duration={250} title="Reumatologia">
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
                <Treatment />
                <Consultaion />
                <Faq />
                <Location />
            </HomeContainer>
    )
}