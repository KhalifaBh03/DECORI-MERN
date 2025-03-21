import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

import { useState, useEffect, useContext } from "react";
import RelatedProducts from "../components/RelatedProducts";
function Product(){
    const {productId}=useParams();
    const{products,currency,addToCart}=useContext(ShopContext);
    const getColorCode = (colorName) => {
        const colorMap = {
            "gray": "#808080",
            "blue": "#0000FF",
            "green": "#008000",
            "oak": "#C69C6D",  // A typical oak wood color
            "walnut": "#5B3A29", // A typical walnut wood color
            "light wood": "#D1B28D", // A light wood color
            "dark blue": "#003366", // A dark blue shade
            "white": "#FFFFFF",
            "black": "#000000",
            "beige": "#F5F5DC",
            "dark Blue": "#003366", // Handling variations in naming
        };
    
        return colorMap[colorName.toLowerCase()] || "#000000"; // Default to black if not found
    };
    
    const [productData,setProductData]=useState(false);
    const [image,setImage]=useState('');
    const  [color,setColor]=useState('');
    const fetchProductData=async()=>{
        products.map((item)=>{
             if(item._id===productId){setProductData(item);setImage(item.image[0]);return(null);}
        })
    }
    useEffect(()=>{
       fetchProductData();
    },[productId,products])
    return productData ? (
        <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
            {/*product data*/}
            <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
                {/*product images*/}
                <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                    <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                         {
                            productData.image.map((item,index)=>(
                                <img  onClick={()=>setImage(item)} src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" alt=""/>
                            ))
                         }
                    </div>
                    <div className="w-full sm:w-[80%]">
                        <img className="w-full h-auto" src={image} alt=""/>
                    </div>

                </div>
                {/*-------------------product info------------*/}
                <div className="flex-1">
                    <h1 className="font-medium text-2x1 mt-2">{productData.name}</h1>
                    <div className="flex items-center gap-1 mt-2">
                        <img src="../src/assets/star_icon.png" alt="" className="w-3 5" />
                        <img src="../src/assets/star_icon.png" alt="" className="w-3 5" />
                        <img src="../src/assets/star_icon.png" alt="" className="w-3 5" />
                        <img src="../src/assets/star_icon.png" alt="" className="w-3 5" />
                        <img src="../src/assets/star_dull_icon.png" alt="" className="w-3 5" />
                        <p className="pl-2">(122)</p>
                    </div>
                    <p className="mt-5 text-3x1 font-medium">{currency}{productData.price}</p>
                    <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
                    <div className="flex flex-col gap-4 my-8">
                        <p>Select Color</p>
                        <div className="flex gap-2">
                {productData.colors.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setColor(item)}
                        className={`w-8 h-8 rounded-full ${item === color ? 'border-2 border-orange-500' : 'border-2 border-gray-300'}`}
                        style={{ backgroundColor: getColorCode(item) }}  // Apply the CSS variable here
                    >
                    </button>
                ))}
            </div>

                    </div>
                    <button onClick={()=>addToCart(productData._id,color)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
                    <hr className="mt-8 sm:w-4/5"/>
                    <div className="text-sm text-gray-500 mt-5 flex-col gap-1">
                        <p>100% Original Product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>

                    </div>

                </div>

            </div>
            {/*------------------review section---------*/}
            <div className="mt-20">
                <div className="flex">
                    <b className="border px-5 py-3 text-sm">Description</b>
                    <p className="border px-5 py-3 text-sm">Reviews (122)</p>

                </div>
                <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
                    <p>Décori is your go-to online store for stylish, high-quality furniture. 
                        We offer a seamless shopping experience with a curated selection of elegant 
                        and functional pieces to transform your home. Explore timeless designs, secure checkout, 
                        and effortless elegance—all in one place.</p>
                    <p>With a seamless shopping experience and timeless designs, we make furnishing your home effortless and stylish.</p>
                </div>
            </div>
            {/*---------display related products------------*/}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

        </div>
    ) : <div className="opacity-0"></div>
}

export default Product