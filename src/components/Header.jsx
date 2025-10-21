import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    const links = <>

        <NavLink to={'/'} className='font-semibold'>Home</NavLink>
        <NavLink to={'/auth/login'} className='font-semibold'>Login</NavLink>
        <NavLink to={'/auth/register'} className='font-semibold'>Register</NavLink>

    </>

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm inter-font">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                            {
                                links
                            }
                        </ul>
                    </div>

                    <Link to={'/'}>
                        <span className="text-[28px] text-[#131313] font-bold flex items-center">
                            <span className='ml-2 text-[#632ee3] '>GameHub</span>
                        </span>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center gap-5">

                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={"/auth/login"} className='btn btn-primary px-10'>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Header;

