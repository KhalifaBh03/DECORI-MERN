
import React from "react";
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';
import images from "../assets/images";
function About(){
    return(
        <div>
            <div className="text-2x1 text-center pt-8 border-t">
                <Title text1={'ABOUT'} text2={'US'}/>

            </div>
            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img className='w-full md:max-w-[450px]' src={images.about_img} alt=""></img>
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                    <p>Décori offers stylish, high-quality furniture for every space. Discover elegant designs and timeless craftsmanship to transform your home with comfort and sophistication.</p>
                    <p>Whether you're furnishing your home or office,
                         Décori provides the perfect blend of comfort and 
                         sophistication to transform any space. Explore our collection 
                         and find the perfect pieces to reflect your unique style!</p>
                    <b className="text-gray-800">Our Mission</b>
                    <p>At Décori, we aim to provide high-quality, stylish furniture that transforms every space into a comfortable and elegant environment. Our curated collection blends timeless design with modern trends, helping you create a space that reflects your unique style.</p>
                </div>
            </div>
            <div className="text-x1 py-4"><Title text1={'WHY'} text2={'CHOOSE US'}/></div>
            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Quality Assurance:</b>
                    <p className="text-gray-600">At Décori, quality is our top priority. Each piece of furniture undergoes rigorous testing to ensure durability, functionality, and craftsmanship. We are committed to delivering products that 
                        meet the highest standards, so you can enjoy both style and long-lasting comfort.</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Convenience:</b>
                    <p className="text-gray-600">At Décori, we prioritize your convenience. With an easy-to-navigate online store, fast delivery options, and hassle-free returns, 
                        we make shopping for furniture simple and stress-free, so you can enjoy your new pieces without any delays.</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Exceptional Customer Service:</b>
                    <p className="text-gray-600">At Décori, we believe in providing exceptional customer service. Our friendly and knowledgeable team is always ready to assist you, ensuring a seamless shopping experience from start to finish.
                         We’re here to help you find the perfect furniture and answer any questions along the way.</p>
                </div>
                
            </div>
            <NewsletterBox/>
        </div>
    )
}

export default About;