import React, { useEffect, useState} from 'react';

import axios from 'axios';

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
import { response } from 'express';

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

    const url = import.meta.env.VITE_GOOGLE_MAPS_REVIEWS_URL;

    const [isLoading, setLoading] = useState(true);
    const [reviewsSort, setReviewsSort] = useState([]);
  
    const getReviewsFromApi = async () => {
        try {
            const response = await axios.get(
                '/api', { headers: {
                    "Content-Type": "application/json",
                    'Cache-Control': 'no-cache',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Methods': 'GET',
                    }
                }
            );
            const data = response.data;
            setReviewsSort(data.result.reviews);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
  
    useEffect(() => {
        getReviewsFromApi();
    }, [isLoading]);

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

                        {reviewsSort.length === 0 ? <p>Carregando...</p> : (
                                reviewsSort.map((review: any) => {
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