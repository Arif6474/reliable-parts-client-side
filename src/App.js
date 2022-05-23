
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Home/Blogs';
import Home from './Pages/Home/Home';
import Part from './Pages/Home/Part';
import Parts from './Pages/Home/Parts';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Routes>
       <Route path="/" element={<Home></Home>}> </Route>
       <Route path="blogs" element={<Blogs></Blogs>}> </Route>
       <Route path="parts" element={<Parts></Parts>}> </Route>
       <Route path="part" element={<Part></Part>}> </Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
