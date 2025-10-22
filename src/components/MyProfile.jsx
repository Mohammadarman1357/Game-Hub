import React from 'react';
import Header from './Header';
import MyProfileInfo from '../pages/MyProfileInfo';

const MyProfile = () => {

    return (
        <div className='bg-gradient-to-bl from-[#050505] to-[#2f0076] min-w-screen min-h-screen'>
            <div className='mx-auto my-3 '>

                <header>
                    <Header></Header>
                </header>

                <main className='my-5 flex items-center justify-center'>

                    <MyProfileInfo></MyProfileInfo>

                </main>
            </div>
        </div>

    );
};

export default MyProfile;