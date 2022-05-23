import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('parts.json')
        .then(res => res.json())
        .then(data => setParts(data))

    },[])
    return (
        <div>
            <div>
                <h1 className="text-center text-4xl font-bold text-red-200 my-8 ">Car Parts</h1>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-3 mx-4 gap-4">
            {
                parts.map(part =><Part part={part}></Part>)
            }
            </div>
        </div>
    );
};

export default Parts;