import { Link } from 'react-scroll';
import { Carousel } from 'react-bootstrap';

import { HomeContainer, 
         CarouselContainer, 
         SlideButton,
         Banner,
         BannerContainer,
         BannerContent,
         Text,
         Appointment,
         BannerButton} from "./styles";

import { About } from '../About';
import { Treatment } from '../Treatment';
import { Consultaion } from '../Consultation';
import { Faq } from '../Faq';
import { Clinic } from '../Clinic';
import { Review } from '../Reviews';
import { Location } from '../Location';

import PhotoSlide1 from '../../assets/photo-slide-1.webp';
import PhotoSlide2 from '../../assets/photo-slide-2.webp';

import { WhatsappLogo } from 'phosphor-react';

export function Home() {

    return (
            <HomeContainer>
                <CarouselContainer>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={PhotoSlide1}
                            height = "550"
                            width = "1425"
                            alt="Primeiro slide"
                        />
                        <Carousel.Caption>
                        { /* <h3>Dra Rosa Priscila</h3> */ }
                        { /* <p>Reumatologista</p> */ }
                        <h1>+3.000 pacientes tratados.</h1>
                        <p>Juntos, buscando melhorar sua qualidade de vida.</p>
                        <Link activeClass="active" className="scrollLink" to="about" smooth={true} spy={true} duration={400} href="#sobre"title="Sobre mim">
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
                        src={PhotoSlide2}
                        height = "550"
                        width = "1425"
                        alt="Segundo slide"
                        />

                        <Carousel.Caption>
                        <h3>O que é Reumatologia?</h3>
                        <p>Área da medicina destinada ao diagnóstico e tratamento das doenças do aparelho locomotor.</p>
                        <Link activeClass="active" className="scrollLink" to="treatment" smooth={true} spy={true} duration={400} href="#reumatologia" title="Reumatologia">
                            <SlideButton
                                iconExists={false}
                                className
                                children="Reumatologia"
                            />
                        </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </CarouselContainer>
                <Banner>
                    <BannerContainer>
                        <BannerContent>
                            <Text>
                                <h2>Atendimento presencial e por telemedicina</h2>
                                <span>Clique agora mesmo, não perca tempo. </span>
                            </Text>
                            <Appointment>
                                 <a href="https://bit.ly/rpriscila-reumato" target="_blank" title="Agende sua consulta">
                                    <BannerButton 
                                        iconExists={true}
                                        icon={<WhatsappLogo size={22} />}
                                        children="Agendar Consulta"           
                                    />
                                </a>
                            </Appointment>
                        </BannerContent>
                    </BannerContainer>
                </Banner>
                <About />
                <Treatment />
                <Consultaion />
                <Faq />
                <Clinic />
                <Review />
                <Location />
            </HomeContainer>
    )
}