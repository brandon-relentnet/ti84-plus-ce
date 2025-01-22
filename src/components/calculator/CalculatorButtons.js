import Button from "../Button"

export default function CalculatorButtons({ numbers, onClick, operands, arrows, handleArrowKey }) {


    return (
        <>
            <div className="flex justify-end mr-8 mb-4 space-x-4 text-2xl">
                {arrows.map((arrow) => (
                    <button
                        className="font-bold text-zinc-950 bg-zinc-50 border-2 border-transparent hover:border-zinc-400 transition duration-150 active:border-zinc-600 rounded-lg active:scale-110 w-16 h-12"
                        onClick={handleArrowKey}
                        key={arrow}
                        value={arrow}
                    >
                        {arrow}
                    </button>
                ))}
            </div>
            <div className="flex justify-evenly">
                <div className="grid grid-cols-3 gap-4 text-4xl">
                    {numbers.map((number) => (
                        <button
                            className="font-bold text-zinc-950 bg-zinc-50 border-2 border-transparent hover:border-zinc-400 transition duration-150 active:border-zinc-600 rounded-lg active:scale-110 w-16 h-16"
                            onClick={onClick}
                            key={number}
                            value={number}
                        >
                            {number}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 text-2xl">
                    {operands.map((operand) => (
                        <button
                            className="font-bold text-zinc-950 bg-zinc-50 border-2 border-transparent hover:border-zinc-400 transition duration-150 active:border-zinc-600 rounded-lg active:scale-110 w-16 h-12"
                            onClick={onClick}
                            key={operand}
                            value={operand}
                        >
                            {operand}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}