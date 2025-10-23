import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import PopularGames from '../components/PopularGames';
import Footer from '../components/Footer';
import NewsLetter from '../pages/NewsLetter';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto bg-gradient-to-bl from-[#050505] to-[#2f0076]'>
            <header>
                <nav className='mx-auto my-3'>
                    <Header></Header>
                </nav>
            </header>

            <main className='w-11/12 mx-auto my-3'>

                <Banner></Banner>
                <PopularGames></PopularGames>
                <NewsLetter></NewsLetter>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;