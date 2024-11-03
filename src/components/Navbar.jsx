import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    // Check if the current route is /home
    const isHomeRoute = location.pathname === '/home';

    const links = (
        <>
            <NavLink to='/home' className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink>
            <NavLink to='/statistics' className={({ isActive }) => (isActive ? 'active-link' : '')}>Statistics</NavLink>
            <NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'active-link' : '')}>Dashboard</NavLink>
        </>
    );

    return (
        <div>
            {/* navbar */}
            <div className={`navbar max-w-screen-xl mx-auto ${isHomeRoute ? 'bg-[#9538E2] text-white absolute top-2 left-1/2 transform -translate-x-1/2 w-full z-10' : 'bg-white'}`}>
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-12">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
