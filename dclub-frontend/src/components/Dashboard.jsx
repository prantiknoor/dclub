import React from 'react';
import {useState} from 'react';

const Dashboard = () => {
    const [isAdmin, setIsAdmin] = useState(true);
    const [isModerator, setIsModerator] = useState(true);

    return (
        <div>Dashboard</div>
    )
    
}

export default Dashboard;