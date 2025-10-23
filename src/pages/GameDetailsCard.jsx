import React from 'react';

const GameDetailsCard = ({ game }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-8">

            <div className="flex-shrink-0 w-full lg:w-96 h-96 overflow-hidden rounded-xl shadow-lg">
                <img
                    src={game.coverPhoto}
                    alt={game.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div>
                <h1 className="text-4xl font-extrabold text-white mb-3">{game.title}</h1>

                <div className="flex items-center space-x-4 mb-4">
                    <div className="badge badge-info p-3 font-semibold">{game.category}</div>
                    <div className="flex items-center">
                        <gameRatings rating={game.ratings} />
                    </div>
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {game.description}
                </p>

                <div className="space-y-3">
                    <p className="text-gray-400">
                        Developer :
                        <span className="font-semibold text-white ml-2">{game.developer}</span>
                    </p>
                    <a href={game.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-lg mt-4 w-full sm:w-auto">
                        Download / Learn More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default GameDetailsCard;