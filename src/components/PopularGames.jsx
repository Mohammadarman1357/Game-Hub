import React, { use, useState } from 'react';
import GameDetails from '../pages/GameDetails';
import GameSlide from '../pages/GameSlide';
import { useNavigate } from 'react-router';

const gamePromise = fetch('/games.json')
    .then((res) => res.json());

const PopularGames = () => {
    const gameData = use(gamePromise);
    const [selectedGame, setSelectedGame] = useState(null);
    const navigate = useNavigate();

    const handleCardClick = (game) => {
        setSelectedGame(game);
        navigate(`/gamedetails/${game.id}`);
    };

    return (
        <div className='min-h-screen text-white p-1 md:p-4 mx-auto my-1 md:my-3'>
            <h1 className='font-bold text-4xl mb-5'>Popular Games</h1>

            <div className="max-w-7xl mx-auto">

                {
                    selectedGame ? (
                        <GameDetails ></GameDetails>
                    ) : (
                        <GameSlide gameData={gameData} onCardClick={handleCardClick} />
                    )
                }

            </div>
        </div >
    );
};

export default PopularGames;
