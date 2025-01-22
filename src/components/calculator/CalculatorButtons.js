import Button from "../Button"

const utilityButtons = Array.from(Array(5).keys());
const fillerButtons0 = Array.from(Array(6).keys());
const fillerButtons1 = Array.from(Array(10).keys());
const fillerButtons2 = Array.from(Array(4).keys());
const fillerButtons3 = Array.from(Array(4).keys());

export default function CalculatorButtons({ numbers, onClick, operands, arrows, handleArrowKey }) {


    return (
        <div className="mx-auto px-8">
            {/* Utility Buttons */}
            <div className="grid grid-cols-5 gap-4 mb-4">
                {utilityButtons.map((utility) => (
                    <button
                        className="font-bold text-zinc-950 bg-zinc-50 border-2 border-transparent hover:border-zinc-400 transition duration-150 active:border-zinc-600 rounded-lg active:scale-95 w-12 h-6"
                        key={utility}
                    >
                        {utility}
                    </button>
                ))}
            </div>

            {/* Filler + Arrow Buttons */}
            <div className="grid grid-cols-5 gap-4 mb-2">

                {/* Filler0 Buttons */}
                <div className="grid grid-cols-3 gap-4 col-span-3 mb-2">
                    {fillerButtons0.map((filler) => (
                        <button
                            className="font-bold text-zinc-50 bg-zinc-800 border-2 border-transparent hover:border-zinc-400 transition duration-150 active:border-zinc-600 rounded-lg active:scale-95 w-12 h-8"
                            key={filler}
                        >
                            {filler}
                        </button>
                    ))}
                </div>

                {/* Arrow Buttons */}
                <div className="flex col-span-2 justify-center items-center space-x-4 text-2xl">
                    {arrows.map((arrow) => (
                        <button
                            className="font-bold text-zinc-950 bg-zinc-50 border-2 border-transparent hover:border-zinc-400 transition duration-150 active:border-zinc-600 rounded-lg active:scale-95 w-12 h-8"
                            onClick={handleArrowKey}
                            key={arrow}
                            value={arrow}
                        >
                            {arrow}
                        </button>
                    ))}
                </div>
            </div>

            {/* Filler1 Buttons */}
            <div className="grid grid-cols-5 gap-4 mb-4">
                {fillerButtons1.map((filler) => (
                    <button
                        className="font-bold text-zinc-50 bg-zinc-800 border-2 border-transparent hover:border-zinc-400 transition duration-150 active:border-zinc-600 rounded-lg active:scale-95 w-12 h-8"
                        key={filler}
                    >
                        {filler}
                    </button>
                ))}
            </div>

            {/* Filler2 + Operands Buttons */}
            <div className="grid grid-cols-5 gap-4 mb-4">
                <div className="grid grid-cols-4 col-span-4 gap-4">
                    {fillerButtons2.map((filler) => (
                        <button
                            className="font-bold text-zinc-50 bg-zinc-800 border-2 border-transparent hover:border-zinc-400 transition duration-150 active:border-zinc-600 rounded-lg active:scale-95 w-12 h-8"
                            key={filler}
                        >
                            {filler}
                        </button>
                    ))}
                </div>

                {/* Operands Buttons */}
                <div className="grid grid-rows-4 col-span-1 gap-4 text-lg">
                    {operands.map((operand) => (
                        <button
                            className="font-bold text-zinc-950 bg-zinc-50 border-2 border-transparent hover:border-zinc-400 transition duration-150 active:border-zinc-600 rounded-lg active:scale-95 w-12 h-8"
                            onClick={onClick}
                            key={operand}
                            value={operand}
                        >
                            {operand}
                        </button>
                    ))}
                </div>
            </div>

            {/* Filler3 */}
            <div className="grid grid-cols-1 col-span-1 gap-4 -mt-48">
                    {fillerButtons3.map((filler) => (
                        <button
                            className="font-bold text-zinc-50 bg-zinc-800 border-2 border-transparent hover:border-zinc-400 transition duration-150 active:border-zinc-600 rounded-lg active:scale-95 w-12 h-8"
                            key={filler}
                        >
                            {filler}
                        </button>
                    ))}
                </div>

            {/* Number Buttons */}
            <div className="flex justify-evenly -mt-44">
                <div className="grid grid-cols-3 gap-4 text-3xl">
                    {numbers.map((number) => (
                        <button
                            className="font-bold text-zinc-950 bg-zinc-50 border-2 border-transparent hover:border-zinc-400 transition duration-150 active:border-zinc-600 rounded-lg active:scale-95 w-12 h-10"
                            onClick={onClick}
                            key={number}
                            value={number}
                        >
                            {number}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}