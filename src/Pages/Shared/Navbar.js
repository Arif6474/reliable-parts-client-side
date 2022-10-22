import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css'
const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    navigate('/login');
    localStorage.removeItem('accessToken');
    
  };
    return (
       
<div   className="navbar text-white  lg:px-16  bg-[#050e22] ">
  <div className="navbar-start">
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-neutral btn-sm p-2 mx-2 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact font-bold dropdown-content text-white mt-3 p-2 shadow bg-[#181f1c] rounded-box w-52">
      <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans w-11 font-medium m-2 text-amber-300   text-decoration-none rounded hover:text-amber-300 border-amber-300 border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-amber-300"
          }
          as={Link} to="/">Home</NavLink>
     
    <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans w-10 font-medium m-2 text-amber-300 text-decoration-none rounded hover:text-amber-300 border-amber-300 border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-amber-300"
          }
          as={Link} to="/all-parts">Parts</NavLink>
     
      <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans w-[70px] font-medium m-2 text-amber-300 text-decoration-none rounded hover:text-amber-300 border-amber-300 border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-amber-300"
          }
          as={Link} to="/company">Company</NavLink>
      <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans w-8 font-medium m-2 text-amber-300 text-decoration-none rounded hover:text-amber-300 border-amber-300 border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-amber-300"
          }
          as={Link} to="/blogs">Blog</NavLink>
      <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans w-[80px] font-medium m-2 text-amber-300 text-decoration-none rounded hover:text-amber-300 border-amber-300 border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-amber-300"
          }
          as={Link} to="/contact">Contact us</NavLink>
           <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans w-[68px] font-medium m-2 text-amber-300 text-decoration-none rounded hover:text-amber-300 border-amber-300 border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-amber-300"
          }
          as={Link} to="/about-us">About us</NavLink>

      </ul>
    </div>
    <Link to='/' className="lg:text-2xl font-medium text-[#dde9e9]   font-sans">Reliable Parts</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans font-medium m-2 text-amber-300 text-decoration-none rounded hover:text-amber-300 border-amber-300 border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-amber-300"
          }
          as={Link} to="/">Home</NavLink>
     
    <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans font-medium m-2 text-amber-300 text-decoration-none rounded hover:text-amber-300 border-amber-300 border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-amber-300"
          }
          as={Link} to="/all-parts">Parts</NavLink>
     
      <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans font-medium m-2 text-amber-300 text-decoration-none rounded hover:text-amber-300 border-amber-300 border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-amber-300"
          }
          as={Link} to="/company">Company</NavLink>
      <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans font-medium m-2 text-amber-300 text-decoration-none rounded hover:text-amber-300 border-amber-300 border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-amber-300"
          }
          as={Link} to="/blogs">Blog</NavLink>
      <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans font-medium m-2 text-amber-300 text-decoration-none rounded hover:text-amber-300 border-amber-300 border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-amber-300"
          }
          as={Link} to="/contact">Contact us</NavLink>
      <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans font-medium m-2 text-amber-300 text-decoration-none rounded hover:text-amber-300 border-amber-300 border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-amber-300"
          }
          as={Link} to="/about-us">About us</NavLink>

    
    </ul>
  </div>
  <div className="navbar-end">

 {
       user && <Link to='/dashboard' className=" font-sans font-medium hover:text-amber-300">Dashboard</Link>
    }
    {user ? <button onClick={logout} className="btn btn:sm btn-ghost hover:text-amber-300">Sign Out</button> :<Link to="/login" className=" font-sans font-medium hover:text-amber-300">Login</Link>}
   

  </div>
</div>
   
    );
};

export default Header;

