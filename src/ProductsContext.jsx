import React, { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('Products.json'); 
            const data = await response.json();
            setProducts(data);
        };

        fetchData();
    }, []);

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;