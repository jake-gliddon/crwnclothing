import { React, createContext, useState, useEffect } from 'react';
import SHOP_DATA from '../shop-data.json'

export const ProductContext = createContext({
    products: []
})

export const ProductsProvider = ({children}) =>{
    const [products, setProduct] = useState(SHOP_DATA);
    const value = {products}
    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>

    )
}