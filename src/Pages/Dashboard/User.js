import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const User = () => {
    const { isLoading, data: users , refetch} = useQuery('user', () =>
     fetch('https://reliable-parts-server.up.railway.app/user' ,{
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then(res =>res.json()))

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
        <th>Email</th>
        <th>Make</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
      {
          users.map((user , index) => <UserRow refetch={refetch} index={index} key={user._id} user={user}></UserRow>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default User;