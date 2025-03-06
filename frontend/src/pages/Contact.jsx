import React from "react";
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';
import images from "../assets/images";
function Contact(){
    return(
        <div>
            <div className="text-center text-2x1 pt-10 border-t">
                <Title text1={'CONTACT'} text2={'US'}/>
            </div>
            <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
                <img className="w-full md:max-w-[480px]" src={images.contact_img} alt=""></img>
                <div className="flex flex-col justify-center items-start gap-6">
                    <p className="font-semibold text-x1 text-gray-600">Our Store</p>
                    <p className="text-gray-500">Tunisia, Ariana,1000<br/>2 Rue de la Liberté,</p>
                    <p className="text-gray-500">Tel: +216-99-999-999<br/>Email: contact@decori.com</p>
                    <p className="font-semibold text-x1 text-gray-600">Careers at Décori</p>
                    <p className="text-gray-500">Learn more about our teams and job openings.</p>
                    <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>

                </div>

            </div>
            <NewsletterBox/>
        </div>
    )
}

export default Contact;