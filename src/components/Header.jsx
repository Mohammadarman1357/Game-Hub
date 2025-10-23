import React, { use } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Header = () => {
    const { user, logOut } = use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handlelogOut = () => {
        logOut()
            .then(() => {
                alert("You are successfully Log out!");
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(error => {
                console.log(error);
            })
    }

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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-4 shadow space-y-2">


                            {
                                user ?
                                    <div className='flex flex-col gap-2 items-center'>
                                        <div className='flex gap-5 items-center'>
                                            <Link to={'/myprofile'}><img className='w-10 rounded-full' src={`${user?.photoURL}`} alt="" /></Link>
                                            <h1>{user?.displayName}</h1>
                                        </div>
                                        <button onClick={handlelogOut} className='btn btn-secondary px-10 mt-2 w-full'>LogOut</button>
                                    </div>
                                    :
                                    <div className='space-y-2 '>
                                        <Link to={"/auth/login"} className='btn btn-outline hover:text-black px-6 w-full'>
                                            Login
                                        </Link>
                                        <Link to={"/auth/register"} className='btn btn-secondary px-6 w-full'>
                                            Register
                                        </Link>
                                    </div>
                            }

                        </ul>
                    </div>

                    <Link to={'/'}>
                        <span className="text-[28px] text-[#131313] font-bold flex items-center">
                            <span className='ml-2 text-white '>Game<span className='text-secondary'>Hub</span></span>
                        </span>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center gap-5">

                    </ul>
                </div>
                <div className="navbar-end">

                    <div className='flex gap-5 items-center pr-5'>

                        {
                            user ?
                                <div className='flex gap-5 items-center'>
                                    <button onClick={handlelogOut} className='btn btn-secondary px-5 hidden md:flex'>LogOut</button>
                                    <Link to={'/myprofile'}><img className='w-12 rounded-full' src={`${user?.photoURL}`} alt="" /></Link>
                                </div>
                                :
                                <div className='flex gap-2 items-center'>

                                    <Link to={"/auth/register"} className='btn btn-outline hover:text-black px-6 hidden md:flex'>
                                        Register
                                    </Link>

                                    <Link to={"/auth/login"} className='btn btn-secondary px-6 hidden md:flex'>
                                        Login
                                    </Link>

                                </div>
                        }

                    </div>
                </div>
            </div >
        </div >
    );
};
export default Header;

