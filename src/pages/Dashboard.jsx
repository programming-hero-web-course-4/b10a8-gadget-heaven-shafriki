import React, { useEffect, useContext, useState } from 'react';
import { ProductsContext } from '../ProductsContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const { cart, wishlist, addToCart, removeFromWishlist } = useContext(ProductsContext);
    const [activeTab, setActiveTab] = useState('Cart');
    const [disabledButtons, setDisabledButtons] = useState({});

    useEffect(() => {
        document.title = "Dashboard | Gadget Heaven";
    }, []);

    const handleAddToCart = (item) => {
        if (disabledButtons[item.product_id] || cart.some(cartItem => cartItem.product_id === item.product_id)) {
            toast.info("Already added to cart");
            return;
        }
        addToCart(item);
        setDisabledButtons((prev) => ({ ...prev, [item.product_id]: true }));
        toast.success(`${item.product_title} Added to cart`);
    };

    const handleDeleteFromWishlist = (productId) => {
        removeFromWishlist(productId);
        toast.success("Item removed from wishlist");
    };

    return (
        <div className='px-1 md:px-0'>

            <div className='bg-[#9538E2] text-white flex flex-col items-center py-4 px-2 md:px-0'>

                <h1 className='text-lg md:text-3xl font-bold mb-2'>Dashboard</h1>

                <p className='text-xs md:text-base md:w-2/5 text-gray-200 text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div className='flex items-center gap-4 mt-3'>
                    <button 
                        onClick={() => setActiveTab('Cart')}
                        className={`text-lg font-medium border-2 rounded-full px-12 py-1 ${activeTab === 'Cart' ? 'bg-white text-[#9538E2]' : 'bg-transparent'}`}> Cart </button>

                    <button 
                        onClick={() => setActiveTab('Wishlist')}
                        className={`text-lg font-medium border-2 rounded-full px-9 py-1 ${activeTab === 'Wishlist' ? 'bg-white text-[#9538E2]' : 'bg-transparent'}`}> Wishlist </button>
                </div>
            </div>

            <div className='py-4 max-w-screen-xl mx-auto'>
                {activeTab === 'Cart' ? (
                    cart.length ? cart.map(item => (
                        <div key={item.product_id} className='p-4 border rounded mb-2 flex items-center'>
                            <img src={item.product_image} alt={item.product_title} className='h-16 w-16 mr-4' />
                            <div>
                                <p>{item.product_title} - ${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                    )) : <p className='text-center text-3xl text-red-500'>Cart is empty.</p>
                ) : (

                    <>
                        <p className='text-xl font-bold my-5'>Wishlist</p>
                        
                        {wishlist.length ? wishlist.map(item => (
                            <div key={item.product_id} className='p-4 border-2 shadow-md mb-3 flex items-center bg-[#D1B3FF] border-[#9538E2] rounded-xl'>

                                <img src={item.product_image} alt={item.product_title} className='h-28 md:h-36 w-28 md:w-36  mr-4 border-2 rounded-xl' />

                                <div className='flex flex-col items-start'>

                                    <p className='text-sm md:text-lg font-semibold'>{item.product_title}</p>

                                    <p className='text-xs md:text-sm text-gray-500'>{item.description}</p>

                                    <p className='text-xs md:text-base font-medium text-gray-700'>${item.price.toFixed(2)}</p>

                                    <button onClick={() => handleAddToCart(item)} disabled={disabledButtons[item.product_id] || cart.some(cartItem => cartItem.product_id === item.product_id)} className='btn border-none mt-1 rounded-full bg-[#9538E2] text-xs text-white'>{disabledButtons[item.product_id] || cart.some(cartItem => cartItem.product_id === item.product_id) ? 'Added to Cart' : 'Add to Cart'}
                                    </button>

                                </div>
                                <div className='ml-auto'>
                                    <button 
                                        id='delete' 
                                        onClick={() => handleDeleteFromWishlist(item.product_id)} 
                                        className='btn rounded-full border-none bg-red-200'
                                    >
                                        <i className="fa-solid fa-trash-can-arrow-up text-xl text-red-500 cursor-pointer"></i>
                                    </button>
                                </div>
                            </div>
                        )) : <p className='text-center text-3xl text-red-500'>Wishlist is empty.</p>}
                    </>
                )}
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Dashboard;
