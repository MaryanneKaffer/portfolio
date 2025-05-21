'use client';

import { useEffect, useState } from 'react';

const StarField = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const starData = Array.from({ length: 200 }).map(() => ({
            size: Math.random() * 2 + 1,
            left: Math.random() * 100,
            top: Math.random() * 100,
            driftX: (Math.random() - 0.5) * 20,
            driftY: (Math.random() - 0.5) * 20,
            duration: Math.random() * 1 + 5,
            delay: Math.random() * 10,
        }));
        setStars(starData as any);
    }, []);
    return (
        <div className="inset-0 fixed -z-10 overflow-hidden">
            <style>{`
        @keyframes drift {
          from {
            transform: translate(0, 0);
            opacity: 1;
          }
          to {
            transform: translate(var(--drift-x), var(--drift-y));
            opacity: 0.8;
          }
        }
            @keyframes twinkle {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
  }
      `}</style>
            {stars.map((star: {
                size: number
                top: number
                left: number
                duration: number
                delay: number
                driftX: number
                driftY: number
            }, i) => (
                <div
                    key={i}
                    className="absolute rounded-full dark:bg-white bg-black transition-all animate-twinkle"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        animation: `
                            drift ${star.duration}s ease-in-out infinite alternate,
                            twinkle ${star.duration / 2}s ease-in-out infinite`,
                        animationDelay: `${star.delay}s`,
                        '--drift-x': `${star.driftX}px`,
                        '--drift-y': `${star.driftY}px`,
                    } as React.CSSProperties}
                />
            ))}    </div>
    );
};
export default StarField;
