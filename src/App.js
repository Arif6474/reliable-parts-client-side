
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './Pages/Home/Blogs';
import Home from './Pages/Home/Home';
import Parts from './Pages/Home/Parts';
import Purchase from './Pages/Home/Purchase';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Notfound from './Pages/NotFound/Notfound';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import User from './Pages/Dashboard/User';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Profile from './Pages/Dashboard/Profile';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import AddProduct from './Pages/Dashboard/AddProduct';
import Reviews from './Pages/Home/Reviews';
import UserReview from './Pages/Home/UserReview';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';


function App() {
  return (
    <div  >
     <Navbar></Navbar>
     <Routes>
       <Route path="/" element={<Home></Home>}> </Route>
       <Route path="blogs" element={<Blogs></Blogs>}> </Route>
       <Route path="parts" element={<Parts></Parts>}> </Route>
       <Route path="reviews" element={<Reviews></Reviews>}> </Route>
       <Route path="portfolio" element={<MyPortfolio></MyPortfolio>}> </Route>
       <Route path="user-review" element={<UserReview></UserReview>}> </Route>
       <Route path="part/:partId" element={<RequireAuth><Purchase></Purchase></RequireAuth>}> </Route>
       <Route path="dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
       <Route path="orders"  element={<MyOrders></MyOrders>}> </Route>
       <Route path="review"  element={<AddReview></AddReview>}> </Route>
       <Route  index element={<Profile></Profile>}> </Route>
       <Route path="users"  element={<RequireAdmin><User></User></RequireAdmin>}> </Route>
       <Route path="manage-orders"  element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}> </Route>
       <Route path="manage-products"  element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}> </Route>
       <Route path="add-product"  element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}> </Route>
          </Route>
       <Route path="login" element={<Login></Login>}> </Route>
       <Route path="register" element={<Register></Register>}> </Route>
       <Route path="*" element={<Notfound></Notfound>}> </Route>
     </Routes>
     <Footer></Footer>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
