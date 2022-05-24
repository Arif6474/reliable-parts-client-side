import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders , setOrders] = useState([])
    const [user] =useAuthState(auth);
    useEffect(() => {
        if(user){
            fetch(`http://localhost:5000/order?customer=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
        }
    },[user])
    return (
        <div>
            <h2>My Orders: {orders.length}</h2>
            <div class="overflow-x-auto">
        <table class="table w-full">
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

export default MyOrders;