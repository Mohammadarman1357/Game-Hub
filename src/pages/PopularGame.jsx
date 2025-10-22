import React from 'react';

const PopularGame = ({ game }) => {

    const { title} = game;

    return (
        <div className='rounded-xl'>
            <h1>{title}</h1>
        </div>
    );
};

export default PopularGame;