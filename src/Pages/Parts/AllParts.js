import React from 'react';
import useParts from '../../hooks/useParts';
import Part from '../Home/Part';

const AllParts = () => {
    const [parts] = useParts();
    return (
        <div className="my-16">
        <div>
            <h1 className="text-center text-2xl my-8 font-bold w-32 mx-auto text-white uppercase border-b-2 border-[#ea572b]  ">All Parts</h1>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
        {
            parts.map(part =><Part key={part._id} part={part}></Part>)
        }
        </div>
      

    </div>
    );
};

export default AllParts;