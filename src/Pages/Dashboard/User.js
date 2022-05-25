import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const User = () => {
    const { isLoading, data: users } = useQuery('user', () =>
     fetch('http://localhost:5000/user').then(res =>res.json()))

     if (isLoading) {
         return <Loading></Loading>
     }
    return (
        <div>
            <h2 className="text-center text-xl font-bold text-red-200 mt-4">All Users :{users.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {
          users.map((user , index) => <UserRow index={index} key={user._id} user={user}></UserRow>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default User;