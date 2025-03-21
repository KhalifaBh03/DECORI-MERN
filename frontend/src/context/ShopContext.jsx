import { createContext, useEffect, useState } from "react";
import products  from "../assets/assets.js"; 
import { toast } from "react-toastify";
// Make sure the correct path is used

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
   
    const currency = "DT ";
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems,setCartItems]=useState({});

    const addToCart=async(itemId,color)=>{
        if (!color){toast.error("Select Product Color");return;}
        let cartData=structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][color]){cartData[itemId][color]+=1;}
            else{cartData[itemId][color]=1;}
        }
        else{
            cartData[itemId]={};
            cartData[itemId][color]=1;
        }
        setCartItems(cartData);
    }
    const getCartCount=()=>{
        let totalcount=0;
        for(const items in cartItems){
            for( const item in cartItems[items]){
                try {
                    if(cartItems[items][item]>0){
                        totalcount+=cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }return totalcount;
    }

    const value = { products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, cartItems,addToCart,getCartCount };
   
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
