import React, { useEffect, useState} from 'react';
import { LoadScriptProps, useLoadScript, useJsApiLoader } from "@react-google-maps/api";

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import { Element } from "react-scroll"; 

import { v4 as uuidv4 } from 'uuid';

import { Star } from 'phosphor-react';

import { 
    ReviewContainer, 
    Title, 
    ReviewContent,
    ReviewCard,
    ReviewCardContent,
    ReviewCardStars,
    ReviewCardDate,
    } from "./styles";

const libraries: LoadScriptProps['libraries'] = ["places"];

export function Review(){

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

      const [placeName, setPlaceName] = useState("");
    const [reviews, setReviews] = useState([]);
    const {isLoaded, loadError} = useJsApiLoader({
        //To get api key visit https://developers.google.com/maps/documentation/javascript/get-api-key
        //Put your api key of project created in google cloud console
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    
      useEffect(() => {
            const handleError = (status: any, place: any) => {
                let errorMessage = "";
                let httpStatusCode = "";
{}
                // Switch statement to assign error messages and http status codes based on Google Places Status
                switch (status) {
                    case google.maps.places.PlacesServiceStatus.OK:
                        errorMessage = "Error: No reviews available for this place.";
                        httpStatusCode = "200";
                        break;
                    case google.maps.places.PlacesServiceStatus.INVALID_REQUEST:
                        errorMessage = "Error: Invalid query, check placeid parameters.";
                        httpStatusCode = "400";
                        break;
                    case google.maps.places.PlacesServiceStatus.REQUEST_DENIED:
                        errorMessage = "Error: The request was refused, check your api key and permissions.";
                        httpStatusCode = "403";
                        break;
                    case google.maps.places.PlacesServiceStatus.NOT_FOUND:
                        errorMessage = "Error: The placeid was not found.";
                        httpStatusCode = "404";
                        break;
                    default: 
                        errorMessage = `Error: loading reviews: ${status}`;
                        httpStatusCode = "500";
                        break;
                }

                // Warn in console with status, placeid information and error message.
                console.warn(
                    `Status: '${httpStatusCode ? `${httpStatusCode}.` : ""}${status}', PLACEID: '${place ? "FOUND" : "NOT FOUND" }'`
                );

                if(errorMessage) console.error(errorMessage);

            };

            if(isLoaded && !loadError) {
                const mapDiv = document.createElement("div");
                mapDiv.style.display = "none";
                document.body.appendChild(mapDiv);

                const service = new google.maps.places.PlacesService(mapDiv);
                service.getDetails(
                    {
                        placeId: import.meta.env.VITE_GOOGLE_MAPS_PLACE_ID,
                        fields: ["reviews", "photo", "name"],
                        language: "pt",
                        //reviews_no_translations: true,
                        //reviews_sort: "newest",
                    },
                    (place: any, status: any) => {

                        if(status === google.maps.places.PlacesServiceStatus.OK) {

                            if(place?.reviews) {
                                setReviews(place.reviews);
                            }
                            setPlaceName(place.name)
                        } else {
                            handleError(status, place);
                        }
                    }
                );

                return() => {
                    document.body.removeChild(mapDiv);
                };
            }
      }, [isLoaded, loadError]);

    return (
        <Element name="reviews" >
            <ReviewContainer>
                <Title>O que os pacientes dizem ?</Title>
                <ReviewContent>
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
                        focusOnSelect={true}
                        containerClass='custom-react-multi-carousel-list'
                    >

                        {reviews.length === 0 ? <span>Carregando...</span> : (
                                reviews.map((review: any) => {
                                    if(review.rating === 5) {
                                        
                                        const starsNumber = review.rating;
                                        let i = 1;
                                        let stars = [];

                                        for (i; i <= starsNumber; i++) {
                                            stars.push(<Star key={uuidv4()} size={32} weight="fill" color="#ffe234" />);
                                        }

                                        return  <ReviewCard
                                                    key={review.id || review.time}
                                                >
                                                
                                                    {/* USER PROFILE PHOTO */}
                                                    {review.profile_photo_url && (
                                                        <img
                                                            src={review.profile_photo_url}
                                                            alt={`${review.author_name}'s profile`}
                                                            referrerPolicy="no-referrer" //? TO REMOVE REFERRER FROM IMAGE REQUEST
                                                        />
                                                    )}
                                                    <strong>{review.author_name}</strong>
                                                    <ReviewCardStars>
                                                        {stars}
                                                    </ReviewCardStars>
                                                    <ReviewCardDate>
                                                        {review.relative_time_description}
                                                    </ReviewCardDate>
                                                    <ReviewCardContent>
                                                        {review.text}                                                
                                                    </ReviewCardContent>
                                                </ReviewCard>
                                    } 
                                        
                                })
                            
                        )}
                    </Carousel>
                </ReviewContent>
            </ReviewContainer>
        </Element>
    )
}