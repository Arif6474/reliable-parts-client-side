import React from 'react';

const Notfound = () => {
    return (
        <div className="grid grid-cols-1 gap-4 items-center justify-items-center  my-20 ">
           <div>
           <h1 className="font-bold text-red-200">Oops! You're lost</h1>
            <p>The page you are looking for was not found.</p>
           </div>
            <div>
            <img className="h-32 w-32 rounded " src={'https://i.ibb.co/8z995Tx/error.webp'} alt="" />
            </div>
        </div>
    );
};

export default Notfound;