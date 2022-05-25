
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './Pages/Home/Blogs';
import Home from './Pages/Home/Home';
import Part from './Pages/Home/Part';
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

function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Routes>
       <Route path="/" element={<Home></Home>}> </Route>
       <Route path="blogs" element={<RequireAuth><Blogs></Blogs></RequireAuth>}> </Route>
       <Route path="parts" element={<Parts></Parts>}> </Route>
       <Route path="part" element={<Part></Part>}> </Route>
       <Route path="part/:partId" element={<RequireAuth><Purchase></Purchase></RequireAuth>}> </Route>
       <Route path="dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
       <Route index  element={<MyOrders></MyOrders>}> </Route>
       <Route path="review"  element={<AddReview></AddReview>}> </Route>
       <Route path="users"  element={<RequireAdmin><User></User></RequireAdmin>}> </Route>
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
