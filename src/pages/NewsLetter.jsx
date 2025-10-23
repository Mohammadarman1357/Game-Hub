import React from 'react';

const NewsLetter = () => {
    return (
        <div className='w-11/12 mx-auto my-3'>
            <div className='p-2 md:p-20 bg-gradient-to-tr from-[#007111] to-[#01ef0514] rounded-[8px]'>
                <h1 className='text-3xl font-bold text-white'>Subscribe to our Newsletter</h1>
                <p className='mt-5'>
                    Stay ahead of the game! Subscribe to get the latest game releases, updates, and exclusive tips delivered straight to your inbox
                </p>
                <div className='flex w-full justify-center mt-5'>
                    <input type="email" placeholder='Your Email' className='bg-green-100 w-30 md:w-100 text-black p-3 rounded-tl-[8px] rounded-bl-[8px]' />
                    <button className='text-white bg-black p-3 rounded-tr-[8px] rounded-br-[8px]'>Subscribe</button>
                </div>

            </div>
        </div>
    );
};

export default NewsLetter;