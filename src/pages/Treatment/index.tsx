import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import { Element } from "react-scroll"; 

import { 
    TreatmentContainer, 
    Title, 
    TextContent,
    TreatmentContent,
    TreatmentCard
    } from "./styles";

import arthritis from '../../assets/arthritis.jpg';
import arthrosis from '../../assets/arthrosis.jpg';
import fibromyalgia from '../../assets/fibromyalgia.jpg';
import gout from '../../assets/gout.jpeg';
import psoriasis from '../../assets/psoriasis.jpg';
import spondylitis from '../../assets/ankylosing-spondylitis.jpg';

export function Treatment(){
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
          },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <Element name="treatment" >
            <TreatmentContainer>
                <Title>Por que procurar o reumatologista ?</Title>
                <TextContent>
                    <span>
                        A reumtologia é uma especialidade médica dedicada a investigação,
                        diagnóstico e tratamento de mais de 200 doenças diferentes que 
                        podem causar sintomas reumáticos.
                        Por padrão, essas doenças quase que inevitavelmente se apresentam 
                        por meio de dores nas articulações, músculos e tendões.
                        Dessa forma, o papel principal do reumatologista é identificar a causa
                        desses sintomas e oferecer o melhor tratamento, visando
                        melhorar a qualidade de vida dos pacientes.
                        Conheça as principais condições tratadas pelo reumatologista:
                    </span>
                </TextContent>
                <TreatmentContent>
                    <Carousel
                        responsive={responsive}
                        swipeable={true}
                        draggable={true}
                        keyBoardControl={true}
                        showDots={true}
                        ssr={true} // means to render carousel on server-side.
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        autoPlay={true}
                        autoPlaySpeed={2500}
                        infinite={true}
                        // transitionDuration={1000}
                        // focusOnSelect={true}
                        containerClass='custom-react-multi-carousel-list'
                    >
                        <TreatmentCard>
                            <img src={arthritis} title="Foto da Doença Reumatologica Artrite." alt="Foto da Doença Reumatologica Artrite." />
                            <strong>Artrite Reumatoide</strong>
                        </TreatmentCard>
                        <TreatmentCard>
                            <img src={arthrosis} title="Foto da Doença Reumatologica Artrose." alt="Foto da Doença Reumatologica Artrose." />
                            <strong>Artrose</strong>
                        </TreatmentCard>
                        <TreatmentCard>
                            <img src={fibromyalgia} title="Foto da Doença Reumatologica Fibromialgia." alt="Foto da Doença Reumatologica Fibromialgia." />
                            <strong>Fibromialgia</strong>
                        </TreatmentCard>
                        <TreatmentCard>
                            <img src={gout} title="Foto da Doença Reumatologica Gota." alt="Foto da Doença Reumatologica Gota." />
                            <strong>Gota</strong>
                        </TreatmentCard>
                        <TreatmentCard>
                            <img src={psoriasis} title="Foto da Doença Reumatologica Psoriase." alt="Foto da Doença Reumatologica Psoriase." />
                            <strong>Artrite Psoriásica</strong>
                        </TreatmentCard>
                        <TreatmentCard>
                            <img src={spondylitis} title="Foto da Doença Reumatologica Espondilite Anquilosante." alt="Foto da Doença Reumatologica Espondilite Anquilosante." />
                            <strong>Espondilite Anquilosante</strong>
                        </TreatmentCard>
                    </Carousel>
                </TreatmentContent>
            </TreatmentContainer>
        </Element>
    )
}