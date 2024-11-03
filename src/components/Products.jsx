import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Products');
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('Products.json'); 
            const data = await response.json();
            setProducts(data);
        };

        fetchData();
    }, []);

    const categories = [
        'All Products',
        'Laptops',
        'Phones',
        'iPhones',
        'MacBooks',
        'Smart Watches',
        'Accessories',
    ];

    const filteredProducts = selectedCategory === 'All Products'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 mb-20'>
            <h1 className='md:col-span-5 text-center text-2xl font-bold mb-6'>
                Explore Cutting-Edge Gadgets
            </h1>

            <div className='md:col-span-1 shadow-xl flex flex-col py-3 rounded-xl items-center h-[27rem]'>
                <ul className='space-y-2'>
                    {categories.map((category, index) => (
                        <li 
                            key={index} 
                            className={`cursor-pointer text-center py-2 px-4 rounded-full 
                                ${selectedCategory === category ? 'bg-[#9538E2] text-white' : 'bg-gray-200'}`}
                            onClick={() => setSelectedCategory(category)} 
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>

            <div className='md:col-span-4 grid grid-cols-1 px-4 md:px-0 md:grid-cols-3 gap-4'>
                {filteredProducts.map((product) => (
                    <div key={product.product_id} className='border rounded-xl shadow-lg p-4'>
                        <img src={product.product_image} alt={product.product_title} className='w-full md:h-56 object-cover rounded-xl p-3 border-2' />
                        <h2 className='font-semibold text-lg mt-2'>{product.product_title}</h2>
                        <p className='font-medium text-xs md:text-base text-[#09080F99] mt-2'>${product.price.toFixed(2)}</p>
                        <button 
                            className='btn rounded-full mt-3 border-2 border-[#9538E2] text-[#9538E2]'
                            onClick={() => navigate('/details', { state: product })} // Navigate with product data
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
