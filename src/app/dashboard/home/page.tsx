'use client';

import React from 'react';
import car1 from '../../../../src/assets/imgs/car-1.jpg'
import car2 from '../../../../src/assets/imgs/car-2.jpg'
import car3 from '../../../../src/assets/imgs/car-3.jpg'
import car4 from '../../../../src/assets/imgs/car-4.jpg'
import car5 from '../../../../src/assets/imgs/car-5.jpg'



import Carousel from "@/components/ImageSlider";


const Home = () => {

    const slides = [
        car1,
        car2,
        car3,
        car4,
        car5,
    ]

    return (
        <div className="relative">
            <div className="max-w-lg">
                <Carousel slides={slides}/>
            </div>
        </div>

    );
};

export default Home;