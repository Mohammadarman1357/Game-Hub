import React from 'react';
import Header from '../components/Header';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <nav className='w-11/12 mx-auto my-3'>
                    <Header></Header>
                </nav>
            </header>
        </div>
    );
};

export default HomeLayout;