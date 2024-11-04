import React, { useEffect } from 'react';

const Dashboard = () => {
    useEffect(() => {
        document.title = "Dashboard | Gadget Heaven";
    }, []);

    return (
        <div className='px-1 md:px-0'>
            {/* text content header */}
            <div className='bg-[#9538E2] text-white flex flex-col items-center py-4 px-2 md:px-0'>
                <h1 className='text-lg md:text-3xl font-bold mb-2'>Dashboard</h1>
                <p className='text-xs md:text-base md:w-2/5 text-gray-200 text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div className='flex items-center gap-4 mt-3'>
                    <button className='text-lg font-medium border-2 rounded-full bg-transparent px-12 py-1 cursor-pointer'>Cart</button>
                    <button className='text-lg font-medium border-2 rounded-full bg-transparent px-9 py-1 cursor-pointer'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
