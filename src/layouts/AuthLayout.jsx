import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen bg-gradient-to-bl from-[#050505] to-[#2f0076]'>
            <header className='mx-auto pb-4 '>
                <Header></Header>
            </header>

            <main className='w-11/12 mx-auto py-5'>
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;