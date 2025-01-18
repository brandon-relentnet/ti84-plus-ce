"use client";

import CalculatorButton from "./CalculatorButtons";
import { useState } from "react";

const numbers = Array.from(Array(10).keys());

export default function Calculate() {
    const [pressedNumbers, setPressedNumbers] = useState([]);

    const handleClick = (event) => {
        setPressedNumbers(pressedNumbers.toString().concat(event.target.value));
    }

    console.log(pressedNumbers);

    return (
        <div className="flex flex-col justify-center border-2 w-48 mx-auto py-4 rounded-xl bg-zinc-200 border-zinc-600 shadow-xl">
            <div className="flex justify-center items-center h-14 bg-zinc-800 mx-2 mb-2 rounded-lg">
                <h1 className="text-lg text-zinc-200 font-semibold">{pressedNumbers}</h1>
            </div>
            <div className="h-px bg-zinc-700 mb-2" />
            <CalculatorButton numbers={numbers} onClick={handleClick} />
        </div>
    );
}