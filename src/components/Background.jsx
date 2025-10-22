import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Background = () => {
    const bgRef = useRef(null);
    const light1 = useRef(null);
    const light2 = useRef(null);
    const grid = useRef(null);

    useEffect(() => {

        gsap.to([light1.current, light2.current], {
            x: "random(-50, 50)",
            y: "random(-50, 50)",
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });


        gsap.to(grid.current, {
            backgroundPosition: "200% 200%",
            duration: 20,
            repeat: -1,
            ease: "linear",
        });


        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * 30;
            gsap.to(bgRef.current, {
                rotateY: x,
                rotateX: -y,
                transformPerspective: 500,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={bgRef}
            className="fixed inset-0 overflow-hidden -z-10 bg-[#050505] perspective-1000"
        >

            <div
                ref={light1}
                className="absolute w-[400px] h-[400px] bg-pink-500/30 blur-[120px] rounded-full top-1/4 left-1/4"
            ></div>
            <div
                ref={light2}
                className="absolute w-[400px] h-[400px] bg-blue-500/30 blur-[120px] rounded-full bottom-1/4 right-1/4"
            ></div>


            <div
                ref={grid}
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        "linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px",
                }}
            ></div>


            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#000]/90"></div>
        </div>
    );
};

export default Background;
