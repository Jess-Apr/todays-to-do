import React, { useEffect, useState } from 'react';
import '../css/DateHead.css';

export default function DateHead() {
    const [curDate, setCurDates] = useState('');
    const [curDay, setCurDay] = useState('');

    const d = new Date();
    const months = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
    ];

    const month = months[d.getMonth()];
    const year = d.getFullYear();
    const date = d.getDate();

    const days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    const day = days[d.getDay()];

    useEffect(() => {
        setCurDates(`${year}년 ${month}월 ${date}일`);
        setCurDay(`${day}`);
    }, []); 

    return (
        <div className="datehead">
            <div className="datehead__date">{curDate}</div>
            <div className="datehead__day">{curDay}</div>
        </div>
    );
}