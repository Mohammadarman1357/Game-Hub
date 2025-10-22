import React from 'react';
import Header from './Header';
import MyProfileInfo from '../pages/MyProfileInfo';

const MyProfile = () => {
    
    return (
        <div className='w-11/12 mx-auto my-3'>

            <header>
                <Header></Header>
            </header>
            
            <main className='my-5 flex items-center justify-center'>

                <MyProfileInfo></MyProfileInfo>

            </main>
        </div>
    );
};

export default MyProfile;