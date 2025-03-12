import { createContext, useEffect, useState } from "react";
import products  from "../assets/assets.js";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
   
    const currency = "DT ";
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [token, setToken] = useState('');

    const value = { products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, backendUrl, token, setToken};

    useEffect(()=>{
        if(!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'))
        }
    },[])
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}
;
export default ShopContextProvider;
