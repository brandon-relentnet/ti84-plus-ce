"use client";

import CalculatorButtons from "./CalculatorButtons";
import { useState } from "react";

const numbers = Array.from(Array(10).keys());
const operands = ["+", "-"];
let previousNumbers = "";
let totalOperandsPressed = 0;

export default function Calculator() {
    const [pressedNumbers, setPressedNumbers] = useState([]);
    const [total, setTotal] = useState(0);

    
    console.log("L15" + totalOperandsPressed);
    console.log("Calculator Initiated (Total): " + total);

    const handleClick = (event) => {
        setPressedNumbers(pressedNumbers.toString().concat(event.target.value));
        checkOperand(event);
    }

    function checkOperand(event) {
        let isValidCase = false;

        switch(event.target.value) {
            case "+":
            case "-":
                isValidCase = true;
                break;
            default:
                isValidCase = false;
                console.log("No match, defaulting");           
        }
        if (isValidCase) {
            totalOperandsPressed++;
            console.log(totalOperandsPressed);
            applyOperand(event);
        }
    }

    function applyOperand(event) {
        //assign previous numbers
        //reset pressed numbers
        //increase total operands pressed

        console.log("operand being applied");
        if (totalOperandsPressed == 2) {
            totalOperandsPressed = 0;
        }
    }

    return (
        <div className="flex flex-col justify-center border-2 w-48 mx-auto py-4 rounded-xl bg-zinc-200 border-zinc-600 shadow-xl">
            <div className="flex justify-center items-center h-14 bg-zinc-800 mx-2 mb-2 rounded-lg">
                <h1 className="text-lg text-zinc-200 font-semibold">{pressedNumbers}</h1>
            </div>
            <div className="h-px bg-zinc-700 mb-2" />
            <CalculatorButtons numbers={numbers} onClick={handleClick} />
        </div>
    );
}