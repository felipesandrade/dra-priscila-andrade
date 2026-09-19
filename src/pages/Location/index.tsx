import { 
    Adress, 
    Doctoralia,
    ImageContainer,
    LocationContainer, 
    LocationContent, 
    Map, 
    Phone,
    TitleAdress,
    Wrapper} from "./styles";

import { 
    MapPin,
    PhoneCall, 
    WhatsappLogo } from 'phosphor-react';

import { useEffect } from "react";
    
import { Element } from 'react-scroll';

import Photo from '../../assets/logo-clinica-ffaz-saude.png'
    
export function Location() {

    // Loading Doctoralia Widget
    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://platform.docplanner.com/js/widget.js";
        script.async = true;

        document.body.appendChild(script);

        return() => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <Element name="location">
        <LocationContainer>
            <LocationContent>
                <Wrapper>
                    <ImageContainer>
                        <img src={Photo} title="Logo da Clínica FFAZ Saúde Integrada" alt="Logo da Clínica FFAZ Saúde Integrada" />
                    </ImageContainer>
                    {/* <TitleAdress>
                        <MapPin size={30} weight="fill" />
                        <span>Clínica FFAZ Saúde Integrada</span>
                    </TitleAdress> */}
                    <Adress>
                        <ul>  
                            <li>Rua Monsenhor Bruno, 1906, Aldeota</li>
                            <li>Fortaleza - CE</li>
                            <li>CEP: 60.115-191</li>
                        </ul>
                    </Adress>
                    <Phone>
                        <PhoneCall size={30} weight="fill" />
                        <span><a href="tel:8530852579">(85) 3085.2579</a></span>
                    </Phone>
                    {/*
                    <Phone>
                        <WhatsappLogo size={30} weight="fill" />
                        <span><a href="https://bit.ly/clinica-ffaz" target="_blank" >(85) 98616.1228</a></span>
                    </Phone>
                    */}
                    <Phone>
                        <WhatsappLogo size={30} weight="fill" />
                        <span><a href="https://api.whatsapp.com/send?phone=5585991845806&text=Ol%c3%a1!+Gostaria+de+agendar+um+hor%c3%a1rio+com+a+Dra.+Rosa+Priscila+-+Reumatologista.&utm_source=google" target="_blank" >+55 (85) 99184.5806</a></span>
                    </Phone>
                </Wrapper>
                {/*
                <Map>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15925.293789056599!2d-38.5118398!3d-3.7395264!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748f15190654b%3A0xac92ebd747168176!2sCl%C3%ADnica%20FFAZ%20Sa%C3%BAde%20Integrada!5e0!3m2!1spt-BR!2sbr!4v1703792786468!5m2!1spt-BR!2sbr" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </Map>
                */}
                <Map>
                    <iframe                       
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2367.311306556254!2d-38.51524120793793!3d-3.7387037758711448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7494d97566665%3A0xad60a9a5d0ae19b1!2sDra%20Rosa%20Priscila%20Oliveira%20Monte%20Andrade%2C%20Reumatologista!5e0!3m2!1spt-BR!2sbr!4v1789844667474!5m2!1spt-BR!2sbr" 
                        width="100%" 
                        height="105%" 
                        style={{ border: 0 }}  
                        allowFullScreen
                        loading="lazy" 
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                </Map>
                <Doctoralia>
                    <a 
                        id="zl-url" 
                        className="zl-url" 
                        href="https://www.doctoralia.com.br/rosa-priscila-oliveira-monte-andrade/reumatologista/fortaleza" 
                        rel="nofollow" 
                        data-zlw-doctor="rosa-priscila-oliveira-monte-andrade" 
                        data-zlw-type="big_with_calendar" 
                        data-zlw-opinion="false" 
                        data-zlw-hide-branding="true" 
                        data-zlw-saas-only="false"
                    >
                        Rosa Priscila Oliveira Monte Andrade - Doctoralia.com.br
                    </a>
                </Doctoralia>
            </LocationContent>
        </LocationContainer>
        </Element>
    )
}