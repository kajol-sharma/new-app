'use client';
import Loader from '../../components/Loader';
import { CAROUSEL_API } from '../../api/api';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainCarousel = () => {
    const [carousels, setCarousels] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCarousel = async () => {
        try {
            const response = await fetch(CAROUSEL_API);
            const data = await response.json();
            console.log('Carousel data:', data.message);
            setCarousels(data.message || []);
        } catch (error) {
            console.error('Error fetching carousel:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getCarousel();
    }, []);

    if (loading) return <Loader />;
    if (!carousels.length) return <p className="text-center my-4">No carousel data available.</p>;

    const settings = {
        dots: false,
        infinite: false,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="w-full max-w-[1400px] mx-auto overflow-hidden px-4 md:px-8 lg:px-12 mt-2">
            <Slider {...settings}>
                {carousels.map((item, index) => (
                    <div key={index} className="relative">
                        <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-md">
                            <img
                                src={`https://cdn.punnyadhara.com/uploads/images/${item.image_name}`}
                                alt={item.campaign_name}
                                className="w-full h-full object-cover transition-transform duration-700"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MainCarousel;
