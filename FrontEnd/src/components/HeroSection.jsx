import React, { useState, useEffect } from 'react';
import image1 from "../assets/slider/slide1.jpg"
import image2 from "../assets/slider/slide2.jpg"
import image3 from "../assets/slider/slide4.jpg"
import image4 from "../assets/slider/slide6.jpg"
import image5 from "../assets/slider/slide7.jpg"
import image6 from "../assets/slider/slide10.jpg"
import image7 from "../assets/slider/slide11.jpg"



 const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [image1, image2, image3,image4,image5,image6,image7];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change slide interval here (in milliseconds)

        return () => clearInterval(interval);
    }, [images.length]);
    return (
        <>
            <div className="hero-section">
                <img
                    src={images[currentImageIndex]}
                    alt={`Slide ${currentImageIndex}`}
                    className="hero-image"
                />
            </div>
        </>
    )
}

export default HeroSection;