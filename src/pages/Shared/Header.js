import React from 'react';
import { Link } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import fav from '../../fav.png';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        
        {
         user && <>
            <li><Link to="/manage">Manage</Link></li>
            <li><Link to="/addNewItem">Add Item</Link></li>
            <li><Link to="/myItems">My Items</Link></li>
         </>
        }
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li>{user ? <>
            <button onClick={logout} className="btn btn-ghost">Sign Out</button>
        </> : <Link to="/login">Login</Link>}</li>
    </>
    return (
        <div className="navbar bg-primary text-white lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="flex items-center justify-center pl-5 normal-case font-serif italic text-2xl"> <img className='h-12 w-12' src={fav} alt="" /> Organic Grocer</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;