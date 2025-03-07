import React, { useContext, useEffect, useState } from "react";
import products from "../assets/assets.js"; 
import { ShopContext } from "../context/ShopContext"; // Vérifie si le contexte est bien défini
import dropdownIcon from '../assets/dropdown_icon.png'; 
import Title from "../components/Title";  // Adapte le chemin en fonction de ton projet
import ProductItem from "../components/ProductItem";  // Adapte le chemin en fonction de ton projet

function Collection() {
    const { products , search , showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);  // Fixed the typo here
    const [sortType, setSortType] = useState('relevant');
    
    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setCategory(prev => [...prev, e.target.value]);
        }
    };

    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setSubCategory(prev => [...prev, e.target.value]);
        }
    };

    const applyFilter = () => {
        let productsCopy = products.slice();
        
        // Apply search filter
        if (showSearch && search) {
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }
    
        // Apply category filter
        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }
    
        // Apply subcategory filter
        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
        }
    
        setFilterProducts(productsCopy);  // Update the filtered product list
    };

    const sortProduct = () => {
        let fpCopy = filterProducts.slice();
        switch (sortType) {
            case 'low-high':
                setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
                break;
            case 'high-low':
                setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
                break;
            default:
                applyFilter();
                break;
        }
    };

    useEffect(() => {
        applyFilter();  // Reapply filters when category, subcategory, search, or showSearch change
    }, [category, subCategory, search, showSearch]);

    useEffect(() => {
        sortProduct();  // Reapply sorting when sortType changes
    }, [sortType]);

    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
            {/* Filter options */}
            <div className="min-w-60">
                <p 
                    className="my-2 text-xl flex items-center cursor-pointer gap-2"
                    onClick={() => setShowFilter(!showFilter)} // Ajout d'un toggle au clic
                >
                    FILTERS
                    <img 
                        className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} 
                        src={dropdownIcon} 
                        alt="Dropdown icon" 
                    />
                </p>

                {/* Category filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <label className="flex gap-2">
                            <input className="w-3" type="checkbox" value="Living Room" onChange={toggleCategory} /> Living Room
                        </label>
                        <label className="flex gap-2">
                            <input className="w-3" type="checkbox" value="Dining Room" onChange={toggleCategory}  /> Dining Room
                        </label>
                        <label className="flex gap-2">
                            <input className="w-3" type="checkbox" value="Bedroom" onChange={toggleCategory} /> Bedroom
                        </label>
                        <label className="flex gap-2">
                            <input className="w-3" type="checkbox" value="Office" onChange={toggleCategory} /> Office
                        </label>
                    </div>
                </div>

                {/* Subcategory filter */}
                <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className="mb-3 text-sm font-medium">TYPE</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <label className="flex gap-2">
                            <input className="w-3" type="checkbox" value="Sofas" onChange={toggleSubCategory}/> Sofas
                        </label>
                        <label className="flex gap-2">
                            <input className="w-3" type="checkbox" value="Tables" onChange={toggleSubCategory}/> Tables
                        </label>
                        <label className="flex gap-2">
                            <input className="w-3" type="checkbox" value="Chairs" onChange={toggleSubCategory}/> Chairs
                        </label>
                        <label className="flex gap-2">
                            <input className="w-3" type="checkbox" value="Beds" onChange={toggleSubCategory}/> Beds
                        </label>
                        <label className="flex gap-2">
                            <input className="w-3" type="checkbox" value="Buffets" onChange={toggleSubCategory}/> Buffets
                        </label>
                        <label className="flex gap-2">
                            <input className="w-3" type="checkbox" value="Desks" onChange={toggleSubCategory}/> Desks
                        </label>
                        <label className="flex gap-2">
                            <input className="w-3" type="checkbox" value="Wardrobes" onChange={toggleSubCategory}/> Wardrobes
                        </label>
                        <label className="flex gap-2">
                            <input className="w-3" type="checkbox" value="Nightstands" onChange={toggleSubCategory}/> Nightstands
                        </label>
                        <label className="flex gap-2">
                            <input className="w-3" type="checkbox" value="TV Stands" onChange={toggleSubCategory}/> TV Stands
                        </label>
                        <label className="flex gap-2">
                            <input className="w-3" type="checkbox" value="Dressers" onChange={toggleSubCategory}/> Dressers
                        </label>
                    </div>
                </div>
            </div>

            {/*Right side*/}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2x1 mb-4'>
                    <Title text1={'ALL'} text2={'COLLECTIONS'}/>
                    {/* PRODUCT SORT*/}
                    <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                        <option value="relevant">Sort by: relevant</option>
                        <option value="low-high">Sort by: Low to high</option>
                        <option value="high-low">Sort by: High to low</option>
                    </select>
                </div>
                {/*Map products*/}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6'>
                    {filterProducts.map((item, index) => (
                        <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Collection;
