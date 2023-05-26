import React, { useEffect, useState } from 'react';

export default function DateHead() {
    const [curDate, setCurDates] = useState('');
    const [curDay, setCurDay] = useState('');

    const d = new Date();
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const month = months[d.getMonth()];
    const year = d.getFullYear();
    const date = d.getDate();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[d.getDay()];

    useEffect(() => {
        setCurDates(`${year} ${month} ${date}`);
        setCurDay(`${day}`);
    }, []); 

    return (
        <div>
            <div>{curDate}</div>
            <div>{curDay}</div>
        </div>
    );
}