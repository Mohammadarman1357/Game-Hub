import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import GameCard from './GameCard';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi';

const GameSlide = ({ onCardClick, gameData }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -280 : 280;
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="flex relative items-center mb-2 md:mb-6">

            <div className="flex space-x-2">
                <button
                    className="absolute -bottom-10 left-2 btn btn-square btn-ghost btn-lg text-white hover:bg-gray-700"
                    onClick={() => scroll('left')}
                    aria-label="Scroll Left"
                >
                    <TfiArrowCircleLeft className="w-6 h-6" />
                </button>
                <button
                    className="absolute -bottom-10 right-2 btn btn-square btn-ghost btn-lg text-white hover:bg-gray-700"
                    onClick={() => scroll('right')}
                    aria-label="Scroll Right"
                >
                    <TfiArrowCircleRight className="w-6 h-6" />
                </button>
            </div>

            <div ref={scrollRef} className=" flex space-x-6 pb-6 overflow-x-auto snap-x snap-mandatory focus:outline-none"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}>

                {
                    gameData.map((game) => (
                        <GameCard key={game.id} game={game} onClick={onCardClick} />
                    ))
                }

            </div>
        </div>
    );
};

export default GameSlide;