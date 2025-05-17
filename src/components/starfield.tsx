const StarField = () => {
    const stars = Array.from({ length: 100 });

    return (
        <div className="inset-0 -z-10 bg-black overflow-hidden">
            {stars.map((_, i) => {
                const size = Math.random() * 2 + 1;
                const top = Math.random() * 100;
                const left = Math.random() * 100;
                const delay = Math.random() * 5;

                return (
                    <div
                        key={i}
                        className="absolute transition-all dark:bg-white bg-purple-500 rounded-full animate-twinkle"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            top: `${top}%`,
                            left: `${left}%`,
                            animationDelay: `${delay}s`,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default StarField;
