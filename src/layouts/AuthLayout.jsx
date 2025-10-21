import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto py-4 '>
                <Header></Header>
            </header>

            <main className='w-11/12 mx-auto py-5'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;