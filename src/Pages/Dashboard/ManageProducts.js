import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    
    const { isLoading, data: parts, refetch} = useQuery('part', () =>
    fetch('https://reliable-parts-server.vercel.app/part').then(res =>res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div>
                <h1 className="text-center text-2xl font-bold text-red-200 my-8 ">Manage Products</h1>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-3 m-4 gap-6">
            {
                parts.map(part =><ManageProduct refetch={refetch} key={part._id} part={part}></ManageProduct>)
            }
            </div>
        </div>
    );
};

export default ManageProducts;