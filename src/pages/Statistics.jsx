import React, { useEffect } from 'react';

const Statistics = () => {
    useEffect(() => {
        document.title = "Statistics | Gadget Heaven";
    }, []);

    return (
        <div className='text-center mt-52'>
            <p className='md:text-5xl font-bold text-rose-500'>No Data Found. Working on it!</p>
        </div>
    );
};

export default Statistics;
