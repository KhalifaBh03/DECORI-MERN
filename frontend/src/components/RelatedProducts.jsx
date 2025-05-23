import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products && products.length > 0 && category && subCategory) {
            let filteredProducts = products.filter(
                (item) => item.category === category && item.subCategory === subCategory
            );
            setRelated(filteredProducts.slice(0, 5));
        }
    }, [products, category, subCategory]);

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {related.length > 0 ? (
                    related.map((item) => (
                        <ProductItem key={item._id} id={item._id} name={item.name} price={item.price} image={item.image} />
                    ))
                ) : (
                    <p className="text-center col-span-full">No related products found.</p>
                )}
            </div>
        </div>
    );
};

export default RelatedProducts;
