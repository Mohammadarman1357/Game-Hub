import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { IoArrowBackCircleOutline, IoArrowBackCircleSharp, IoArrowForwardCircleSharp } from "react-icons/io5";

const Banner = () => {
    const [games, setGames] = useState([]);
    const sliderRef = useRef(null);
    const currentIndex = useRef(0);


    useEffect(() => {
        fetch("/games.json")
            .then((res) => res.json())
            .then((data) => setGames(data))
            .catch((err) => console.error("Error loading games.json:", err));
    }, []);


    useEffect(() => {
        if (games.length > 0) {
            gsap.set(".slide", { xPercent: 100 });
            gsap.set(".slide:first-child", { xPercent: 0 });
        }
    }, [games]);

    const nextSlide = () => {
        const slides = sliderRef.current.children;
        const total = games.length;
        const nextIndex = (currentIndex.current + 1) % total;

        gsap.to(slides[currentIndex.current], {
            xPercent: -100,
            duration: 1,
            ease: "power2.inOut",
        });

        gsap.fromTo(
            slides[nextIndex],
            { xPercent: 100 },
            { xPercent: 0, duration: 1, ease: "power2.inOut" }
        );

        currentIndex.current = nextIndex;
    };

    const prevSlide = () => {
        const slides = sliderRef.current.children;
        const total = games.length;
        const prevIndex = (currentIndex.current - 1 + total) % total;

        gsap.to(slides[currentIndex.current], {
            xPercent: 100,
            duration: 1,
            ease: "power2.inOut",
        });

        gsap.fromTo(
            slides[prevIndex],
            { xPercent: -100 },
            { xPercent: 0, duration: 1, ease: "power2.inOut" }
        );

        currentIndex.current = prevIndex;
    };

    return (
        <div className="relative w-full h-[500px] overflow-hidden rounded-2xl">
            <div ref={sliderRef} className="relative w-full h-full">
                {games.map((game) => (

                    <div
                        key={game.id}
                        className="slide absolute top-0 left-0 w-full h-full flex items-center justify-center"
                    >

                        <div className={`relative w-[320px] md:w-[80%] h-[420px] rounded-2xl overflow-hidden shadow-xl group transition-all duration-300 hover:scale-105 border-4 border-transparent hover:border-yellow-400`}>
                            <div className="flex gap-4">
                                <img className="w-[50%] h-full" src={`${game.coverPhoto}`} alt="" />
                                <div className="absolute inset-0 bg-black/40 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h2 className="text-xl font-bold text-white mb-6">
                                        {game.title}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <button
                onClick={prevSlide}
                className="absolute left-4 bottom-1 md:bottom-1/3 hover:bg-blue-900 hover:text-white px-4 py-2 rounded-full transition"
            >
                <IoArrowBackCircleSharp size={40}></IoArrowBackCircleSharp>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 bottom-1 md:bottom-1/3 hover:bg-blue-900 hover:text-white px-4 py-2 rounded-full transition"
            >
                <IoArrowForwardCircleSharp size={40}></IoArrowForwardCircleSharp>
            </button>


        </div >
    );
};

export default Banner;
