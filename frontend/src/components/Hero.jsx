import hero from '../assets/hero.jpg'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import { useState, useEffect } from 'react';

function Hero(){
    const images =[hero, hero1, hero2];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prevImage => (prevImage + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return(
        <div className="flex flex-col sm:flex-row border border-gray-400">
            {/*Hero Left Side*/}
            <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
                <div className="text-[#414141]">
                    <div className="flex items-center gap-2">
                        <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                        <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
                    </div>
                    <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">Latest Arrivals</h1>
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
                        <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>

                    </div>

                </div>
            </div>
            {/* Hero Right Side*/}
            <div className="w-full sm:w-1/2 overflow-hidden relative">
            <div 
                className="flex transition-all duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
                <img className="w-full" src={images[0]} alt="Hero 1" />
                <img className="w-full" src={images[1]} alt="Hero 2" />
                <img className="w-full" src={images[2]} alt="Hero 3" />
            </div>
        </div>
        </div>
    )
}

export default Hero
