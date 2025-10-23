import React from 'react';
import GameRatings from './GameRatings';

const GameCard = ({ game, onClick }) => {
    return (
        <div className="card w-64 md:w-72 bg-base-300 shadow-xl overflow-hidden flex-shrink-0 snap-center rounded-xl transition-transform hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
            onClick={() => onClick(game)}>

            <figure className="relative h-64 overflow-hidden">

                <img
                    src={game.coverPhoto}
                    alt={game.title}
                    className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"

                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/600x400/1f2937/ffffff?text=Image+Missing";
                    }}
                />
            </figure>

            <div className="card-body bg-gradient-to-bl from-gray-950 to-blue-900 p-4 text-left">
                <div className="badge badge-outline text-xs mb-1">
                    {game.category}
                </div>
                <h2 className="card-title text-white text-lg font-bold truncate">
                    {game.title}
                </h2>
                <GameRatings rating={game.ratings} />
            </div>
        </div>
    );
};

export default GameCard;
