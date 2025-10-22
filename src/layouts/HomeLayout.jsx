import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import PopularGames from '../components/PopularGames';
import Banner from '../components/Banner';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <nav className='w-11/12 mx-auto my-3'>
                    <Header></Header>
                </nav>
            </header>

            <main className='w-11/12 mx-auto my-3'>
                <Outlet></Outlet>
                <Banner></Banner>
                <PopularGames></PopularGames>
            </main>
        </div>
    );
};

export default HomeLayout;