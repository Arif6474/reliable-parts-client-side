
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Home/Blogs';
import Home from './Pages/Home/Home';
import Part from './Pages/Home/Part';
import Parts from './Pages/Home/Parts';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Routes>
       <Route path="/" element={<Home></Home>}> </Route>
       <Route path="blogs" element={<RequireAuth><Blogs></Blogs></RequireAuth>}> </Route>
       <Route path="parts" element={<Parts></Parts>}> </Route>
       <Route path="part" element={<Part></Part>}> </Route>
       <Route path="login" element={<Login></Login>}> </Route>
       <Route path="register" element={<Register></Register>}> </Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
