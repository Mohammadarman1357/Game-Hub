import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';

const MyProfileInfo = () => {
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
        <div className='flex flex-col justify-center items-center md:w-[50%] bg-gradient-to-r from-[#19024e] to-[#6b02ff] p-6 rounded-xl border-1 text-white'>
            <img className='w-[150px] h-[150px] rounded-full border-2 border-white ' src={`${user?.photoURL}`} alt="" />
            <h1 className='font-bold my-2 text-2xl md:text-4xl'>{user?.displayName}</h1>
            <h1 className='text-xs md:text-[16px]'>{user?.email}</h1>

            <div className='flex gap-5 mt-5'>
                <button onClick={handlelogOut} className='btn bg-blue-900 px-10'>LogOut</button>
                <Link to={'/updateprofile'} className='btn bg-blue-900 px-10'>Update Profile</Link>
            </div>

        </div>
    );
};

export default MyProfileInfo;