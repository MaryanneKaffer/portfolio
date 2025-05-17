import Star from "./star";
import StarField from "./starfield";

export default function Start() {

    return (
        <section className="w-full justify-items-center place-items-center">
            <h1 className="lg:w-[550px] cursor-default mt-2 lg:text-6xl text-5xl text-center bg-gradient-to-r dark:from-purple-500 dark:to-cyan-500 from-pink-500 to-yellow-500 bg-clip-text text-transparent 
            lg:dark:brightness-100 lg:brightness-125 brightness-150 transition-all duration-500 ease-in-out dark:hover:brightness-125 hover:brightness-150 dark:hover:drop-shadow-[0_0_10px_rgba(0,0,255,0.7)] 
            lg:dark:drop-shadow-[0_0_5px_rgba(0,0,255,0.5)] dark:drop-shadow-[0_0_10px_rgba(0,0,255,0.7)] dark:brightness-125">
                Maryanne Käffer
            </h1>
            <div className="cursor-default flex place-items-center dark:text-purple-700 gap-0 hover:gap-2 text-xl transition-all duration-500 hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(0,0,255,0.9)]">
                <h2>Software</h2>
                <Star />
                <h2>Engineer</h2>
            </div>
            <StarField />
        </section>

    )
}   