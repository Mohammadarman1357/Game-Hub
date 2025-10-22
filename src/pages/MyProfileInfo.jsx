import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const MyProfileInfo = () => {
    const { user } = use(AuthContext);
    // console.log(user)

    // const { email, displayName, photoURL } = user;
    // console.log(email, displayName, photoURL)

    return (
        <div className='flex flex-col justify-center items-center bg-amber-50 p-6 rounded-xl border-1'>
            <img className='w-[150px] h-[150px]' src={`${user?.photoURL}`} alt="" />
            <h1 className='font-bold my-2 text-4xl'>{user?.displayName}</h1>
            <h1>{user?.email}</h1>
        </div>
    );
};

export default MyProfileInfo;