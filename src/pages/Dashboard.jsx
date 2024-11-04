import React, { useEffect } from 'react';

const Dashboard = () => {
    useEffect(() => {
        document.title = "Dashboard | Gadget Heaven";
    }, []);

    return (
        <div>
            dashbord
        </div>
    );
};

export default Dashboard;
