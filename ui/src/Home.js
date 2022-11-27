import React, { useState, useEffect } from 'react';

const Home = () => {

    const [currentTime, setCurrentTime] = useState(0);
    useEffect(() => {
        fetch('/api/time').then(res => res.json()).then(data => {
            setCurrentTime(data.time);
        });
    }, []);


    return (
        <>
            <h1>Home</h1>
            <p> Current time is {currentTime}</p>
        </>
    )
};

export default Home;