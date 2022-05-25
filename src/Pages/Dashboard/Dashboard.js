import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin'
const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
      <h1 className="text-center mt-4 text-2xl font-bold text-amber-200">Welcome to the dashboard</h1>
   <Outlet></Outlet>
   
  </div> 
  <div class="drawer-side">
    <label for="dashboard-sidebar" class="drawer-overlay"></label> 
    <ul class="p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboard"><button class="btn btn-xs mt-4"> My Orders</button> </Link></li>
      <li><Link to="/dashboard/review"><button class="btn btn-xs mt-4">Add a review</button> </Link></li>
     {admin && <li> <Link to="/dashboard/users"><button class="btn btn-xs mt-4">All Users</button> </Link></li>}
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;