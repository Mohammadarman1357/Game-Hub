import React from 'react';
import { FaStar } from 'react-icons/fa';

const GameRatings = ({ rating }) => {
    const numericRating = parseFloat(rating);
    const fullStars = Math.floor(numericRating);

    const stars = [];

    for (let i = 0; i < 5; i++) {
        stars.push(
            <FaStar
                key={i}
                className={`w-4 h-4 transition-colors 
                ${i < fullStars ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}`}
            />
        );
    }

    return (
        <div className="flex items-center space-x-1">
            {stars}
            <span className="ml-2 text-sm font-semibold text-white">{rating}</span>
        </div>
    );
};

export default GameRatings;