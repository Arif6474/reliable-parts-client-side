import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders , setOrders] = useState([])
    const [user] =useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if(user){
            fetch(`https://safe-thicket-05218.herokuapp.com/order?customer=${user?.email}` , {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
              })
            .then(res =>{
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    navigate("/login");
                    localStorage.removeItem("accessToken");
                  }
                return res.json()})
            .then(data => setOrders(data))
        }
    },[user , navigate])
    return (
        <div>
            <h2 className="text-center text-xl font-bold text-red-200 mt-4">My Orders</h2>
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