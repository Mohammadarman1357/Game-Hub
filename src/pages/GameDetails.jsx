import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import GameRatings from './GameRatings';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import GameDetailsCard from './GameDetailsCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GameDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const [game, setGames] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const gameDetails = data.find(singleGame => singleGame.id == id);
        setGames(gameDetails);
    }, [id, data]);

    // console.log(game);

    return (
        <div className='w-11/12 mx-auto'>
            <title>Game Details</title>
            <header>
                <Header></Header>
            </header>

            <main>
                <div className="p-6 bg-gradient-to-bl from-gray-950 to-blue-900 rounded-box shadow-2xl my-3">
                    <button className="btn btn-outline btn-success text-white mb-6 rounded-full"
                        onClick={() => {
                            navigate('/')
                        }}>
                        <FaArrowLeft size={24} />
                    </button>

                    <GameDetailsCard game={game}></GameDetailsCard>


                </div>
            </main>

            <footer>
                <Footer></Footer>
            </footer>

        </div>


    );
};

export default GameDetails;