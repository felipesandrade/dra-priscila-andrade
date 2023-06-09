import { 
    Adress, 
    Doctoralia,
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
                    <TitleAdress>
                        <MapPin size={30} weight="fill" />
                        <span>Clínica BIOMED</span>
                    </TitleAdress>
                    <Adress>
                        <ul>  
                            <li>Rua Carlos Vasconcelos, 1921, Aldeota</li>
                            <li>Fortaleza - CE</li>
                            <li>CEP: 60.115-171</li>
                        </ul>
                    </Adress>
                    <Phone>
                        <PhoneCall size={30} weight="fill" />
                        <span><a href="tel:8532243533">(85) 3224.3533</a></span>
                    </Phone>
                    <Phone>
                        <WhatsappLogo size={30} weight="fill" />
                        <span><a href="https://bit.ly/rpriscila-reumato" target="_blank" >(85) 99273.2713</a></span>
                    </Phone>
                </Wrapper>
                <Doctoralia>
                    <a 
                        id="zl-url" 
                        className="zl-url" 
                        href="https://www.doctoralia.com.br/rosa-priscila-oliveira-monte-andrade/reumatologista/fortaleza" 
                        rel="nofollow" 
                        data-zlw-doctor="rosa-priscila-oliveira-monte-andrade" 
                        data-zlw-type="big" 
                        data-zlw-opinion="true" 
                        data-zlw-hide-branding="true"
                        target="_blank"
                    >
                        Rosa Priscila Oliveira Monte Andrade - Doctoralia.com.br
                    </a>
                </Doctoralia>
                <Map>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3267848716414!2d-38.51512832625158!3d-3.73879144322252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748f135b6108b%3A0x63ee18e8a2f2d9d4!2sBiomed!5e0!3m2!1spt-BR!2sbr!4v1681582520112!5m2!1spt-BR!2sbr" 
                        width="100%" 
                        height="100%"
                        title="Endereço Biomed"
                        style={{ border: 0 }} 
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </Map>
            </LocationContent>
        </LocationContainer>
        </Element>
    )
}