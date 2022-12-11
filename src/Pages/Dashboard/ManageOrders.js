import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';


const ManageOrders = () => {
    const { isLoading, data: orders } = useQuery('orders', () =>
    fetch('https://reliable-parts-server.up.railway.app/orders').then(res =>res.json()))

     if (isLoading) {
         return <Loading></Loading>
     }
    return (
        <div>
        <h2 className="text-center text-xl font-bold text-red-200 mt-4">All Users</h2>
        <div className="overflow-x-auto">
<table className="table w-full">
<thead>
<tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Parts</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
</thead>
<tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{order.customerName}</td>
                <td>{order.customer}</td>
                <td>{order.partName}</td>
                <td>{order.perPiecePrice}</td>
                <td>{order.quantity}</td>
                <td>{order.address}</td>
                <td>{order.phone}</td>
              </tr>
            ))}
          </tbody>
</table>
</div>
    </div>
    );
};

export default ManageOrders;