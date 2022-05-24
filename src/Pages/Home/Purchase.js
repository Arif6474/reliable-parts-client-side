import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {partId} =useParams();
    const [partDetails , setPartDetails] = useState({});
    const {  name, price , image , available, minimum, description} = partDetails;
    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}` 
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPartDetails(data)})
    },[partId, partDetails])

    return (
        <div>
            <h1> This is purchase page {partDetails?.name}</h1>
            
        </div>
    );
};

export default Purchase;