"use client";

import CalculatorButton from "./CalculatorButtons";


const numbers = Array.from(Array(10).keys());

export default function Calculate() {
    const handleClick = (event) => {
        console.log(event.target.value);
    }

    return(
        <CalculatorButton numbers={numbers} onClick={handleClick} />
    );
}