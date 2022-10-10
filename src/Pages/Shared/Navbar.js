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
       
<div   className="navbar text-white  lg:px-16 sticky top-0 bg-[#050e22] ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-primary lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact font-bold dropdown-content text-white mt-3 p-2 shadow bg-[#181f1c] rounded-box w-52">
      <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans w-11 font-medium m-2 text-[#C3FF99] text-decoration-none rounded hover:text-[#C3FF99] border-[#C3FF99] border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-[#C3FF99]"
          }
          as={Link} to="/">Home</NavLink>
     
    <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans w-10 font-medium m-2 text-[#C3FF99] text-decoration-none rounded hover:text-[#C3FF99] border-[#C3FF99] border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-[#C3FF99]"
          }
          as={Link} to="/all-parts">Parts</NavLink>
     
      <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans w-[70px] font-medium m-2 text-[#C3FF99] text-decoration-none rounded hover:text-[#C3FF99] border-[#C3FF99] border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-[#C3FF99]"
          }
          as={Link} to="/company">Company</NavLink>
      <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans w-8 font-medium m-2 text-[#C3FF99] text-decoration-none rounded hover:text-[#C3FF99] border-[#C3FF99] border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-[#C3FF99]"
          }
          as={Link} to="/blogs">Blog</NavLink>
      <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans w-[80px] font-medium m-2 text-[#C3FF99] text-decoration-none rounded hover:text-[#C3FF99] border-[#C3FF99] border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-[#C3FF99]"
          }
          as={Link} to="/contact">Contact us</NavLink>

      <li className=" font-sans -mt-1 font-medium" tabIndex={0}>
        <a>
        About us
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-primary">
          <li className=" font-sans font-medium text-white"><a>Submenu 2</a></li>
          <li className=" font-sans font-medium text-white"><a>Submenu 2</a></li>
        </ul>
      </li>
      </ul>
    </div>
    <Link to='/' className="lg:text-2xl font-medium text-[#dde9e9]   font-sans">Reliable Parts</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans font-medium m-2 text-[#C3FF99] text-decoration-none rounded hover:text-[#C3FF99] border-[#C3FF99] border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-[#C3FF99]"
          }
          as={Link} to="/">Home</NavLink>
     
    <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans font-medium m-2 text-[#C3FF99] text-decoration-none rounded hover:text-[#C3FF99] border-[#C3FF99] border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-[#C3FF99]"
          }
          as={Link} to="/all-parts">Parts</NavLink>
     
      <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans font-medium m-2 text-[#C3FF99] text-decoration-none rounded hover:text-[#C3FF99] border-[#C3FF99] border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-[#C3FF99]"
          }
          as={Link} to="/company">Company</NavLink>
      <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans font-medium m-2 text-[#C3FF99] text-decoration-none rounded hover:text-[#C3FF99] border-[#C3FF99] border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-[#C3FF99]"
          }
          as={Link} to="/blogs">Blog</NavLink>
      <NavLink 
            className={({ isActive }) =>
            isActive ? "font-sans font-medium m-2 text-[#C3FF99] text-decoration-none rounded hover:text-[#C3FF99] border-[#C3FF99] border-b-2" : "font-sans font-medium text-white m-2 text-decoration-none rounded hover:text-[#C3FF99]"
          }
          as={Link} to="/contact">Contact us</NavLink>

      <li className=" font-sans -mt-1 font-medium" tabIndex={0}>
        <a>
        About us
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-primary">
          <li className=" font-sans font-medium text-white"><a>Submenu 2</a></li>
          <li className=" font-sans font-medium text-white"><a>Submenu 2</a></li>
        </ul>
      </li>
    </ul>
  </div>
  <div className="navbar-end">

 {
       user && <Link to='/dashboard' className=" font-sans font-medium">Dashboard</Link>
    }
    {user ? <button onClick={logout} className="btn btn:sm btn-ghost">Sign Out</button> :<Link to="/login" className=" font-sans font-medium">Login</Link>}
   

  </div>
</div>
   
    );
};

export default Header;

