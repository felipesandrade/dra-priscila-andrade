import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import { Element } from "react-scroll"; 

import { 
    ClinicContainer, 
    Title, 
    ClinicContent,
    ClinicCard
    } from "./styles";

import clinica1 from '../../assets/clinica-1.webp';
import clinica2 from '../../assets/clinica-2.webp';
import clinica3 from '../../assets/clinica-3.webp';
import clinica4 from '../../assets/clinica-4.webp';
import clinica5 from '../../assets/clinica-5.webp';
import clinica6 from '../../assets/clinica-6.webp';
import clinica7 from '../../assets/clinica-7.webp';
import clinica8 from '../../assets/clinica-8.webp';
import clinica9 from '../../assets/clinica-9.webp';


export function Clinic(){
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
        <Element name="clinic" >
            <ClinicContainer>
                <Title>Conheça a clínica</Title>
                <ClinicContent>
                    <Carousel
                        responsive={responsive}
                        swipeable={true}
                        draggable={true}
                        keyBoardControl={true}
                        showDots={true}
                        ssr={true} // means to render carousel on server-side.
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        autoPlay={true}
                        autoPlaySpeed={5000}
                        infinite={true}
                        // transitionDuration={1000}
                        // focusOnSelect={true}
                        containerClass='custom-react-multi-carousel-list'
                    >
                        <ClinicCard>
                            <img src={clinica1} title="Foto da Fachada da Clínica." alt="Foto da Fachada da Clínica." />
                        </ClinicCard>
                        <ClinicCard>
                            <img src={clinica2} title="Foto do Interior do Consultório." alt="Foto do Interior do Consultório." />
                        </ClinicCard>
                        <ClinicCard>
                            <img src={clinica3} title="Foto do Interior do Consultório." alt="Foto do Interior do Consultório." />
                        </ClinicCard>
                        <ClinicCard>
                            <img src={clinica4} title="Foto do Interior do Consultório." alt="Foto do Interior do Consultório." />
                        </ClinicCard>
                        <ClinicCard>
                            <img src={clinica5} title="Foto do Interior do Consultório." alt="Foto do Interior do Consultório." />
                        </ClinicCard>
                        <ClinicCard>
                            <img src={clinica6} title="Foto do Interior do Consultório." alt="Foto do Interior do Consultório." />
                        </ClinicCard>
                        <ClinicCard>
                            <img src={clinica7} title="Foto do Interior do Consultório." alt="Foto do Interior do Consultório." />
                        </ClinicCard>
                        <ClinicCard>
                            <img src={clinica8} title="Foto do Interior do Consultório." alt="Foto do Interior do Consultório." />
                        </ClinicCard>
                        <ClinicCard>
                            <img src={clinica9} title="Foto do Interior do Consultório." alt="Foto do Interior do Consultório." />
                        </ClinicCard>
                    </Carousel>
                </ClinicContent>
            </ClinicContainer>
        </Element>
    )
}