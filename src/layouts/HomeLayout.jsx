import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import PopularGames from '../components/PopularGames';

const HomeLayout = () => {
    return (
        <div className='bg-gradient-to-bl from-[#050505] to-[#2f0076]'>
            <header>
                <nav className='mx-auto my-3'>
                    <Header></Header>
                </nav>
            </header>

            <main className='w-11/12 mx-auto my-3'>

                <Banner></Banner>
                <PopularGames></PopularGames>
            </main>
        </div>
    );
};

export default HomeLayout;