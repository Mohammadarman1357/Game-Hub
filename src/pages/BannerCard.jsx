import React from 'react';
import { NavLink } from 'react-router';

const BannerCard = ({ game }) => {
    return (
        <div key={game.id} className="slide absolute top-0 left-0 w-full h-full flex items-center justify-center">

            <div className={`w-[400px] md:w-[80%] h-[450px] rounded-2xl overflow-hidden shadow-xl group transition-all duration-300 hover:scale-105 border-4 border-transparent hover:border-yellow-400`}>
                
                <div className="flex flex-col items-center md:flex-row gap-4">
                    
                    <div className='w-full md:w-[50%] h-[200px] md:h-full flex-1'>
                        <img className="object-contain w-full h-full" src={`${game.coverPhoto}`} alt="" />

                    </div>

                    <div className='flex flex-col space-y-1 md:space-y-3 flex-1'>
                        <h1 className="font-bold md:text-4xl">{game.title}</h1>
                        <p>{game.description}</p>

                        <div className='flex flex-col gap-4'>
                            <h1 className='badge badge-outline'>{game.category}</h1>
                            <NavLink to={`${game.downloadLink}`} className='font-bold btn btn-success w-fit px-10'>Download</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerCard;