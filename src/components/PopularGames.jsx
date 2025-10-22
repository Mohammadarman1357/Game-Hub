import React, { use } from 'react';
import PopularGame from '../pages/PopularGame';

const gamePromise = fetch('/games.json')
    .then((res) => res.json());

const PopularGames = () => {
    const gameData = use(gamePromise);

    return (
        <div className='w-11/12 mx-auto my-3'>
            <h1 className='font-bold text-4xl'>Popular Games</h1>

            <div className='grid grid-cols-3 gap-5 mt-5'>
                {
                    gameData.map(game => <PopularGame game={game}></PopularGame>)
                }
            </div>

        </div>
    );
};

export default PopularGames;