import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Branch = () => {
    useEffect(() => {
        document.title = "Branch | Gadget Heaven";
    }, []);

    const branchData = useLoaderData();

    return (
        <div className="grid grid-cols-1 px-3 md:px-0 md:grid-cols-4 gap-5 max-w-screen-xl mx-auto mt-10">
            {branchData.map((branch) => (
                <div key={branch.contact} className="p-4 bg-green-100 border rounded shadow-md">
                    <h2 className="font-semibold text-lg">{branch.branchName}</h2>
                    <p className='text-gray-500 text-sm'>
                        <i className="fa-solid fa-location-dot mr-1 text-blue-500"></i>
                        Location: {branch.location}
                    </p>
                    <p>
                        <i className="fa-solid fa-address-book mr-1 text-green-500"></i>
                        Contact: {branch.contact}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Branch;
