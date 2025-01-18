"use client";

import CalculatorButtons from "./CalculatorButtons";
import { useState } from "react";

const numbers = Array.from(Array(10).keys());
const operands = ["+", "-"];
let previousNumbers = "";
let totalOperandsPressed = 0;
let displayedCalculation = "";

export default function Calculator() {
    const [pressedNumbers, setPressedNumbers] = useState([]);
    const [lastPressed, setLastPressed] = useState("");
    const [total, setTotal] = useState("");

    const handleClick = (event) => {
        const currentChar = event.target.value;
        if (operands.includes(lastPressed) 
            && operands.includes(currentChar) 
            && lastPressed === currentChar
        ) {
            console.log("Flag");
            return;
        }
        setPressedNumbers(pressedNumbers.toString().concat(event.target.value));
        setLastPressed(currentChar);
        checkOperand(event);
    }

    function checkOperand(event) {
        let isValidCase = false;

        switch (event.target.value) {
            case "+":
            case "-":
                isValidCase = true;
                break;
            default:
                isValidCase = false;
        }
        if (isValidCase) {
            totalOperandsPressed++;
            applyOperand(event);
        }
    }

    function applyOperand(event) {
        const currentOperand = event.target.value;
        if (totalOperandsPressed >= 2) {
            switch (currentOperand) {
                case "+":
                    addition(currentOperand);
                    break;
                case "-":
                    break;
                default:
            }
        } else {
            if (previousNumbers === "") {
                previousNumbers = pressedNumbers;
            }
            displayedCalculation = previousNumbers.toString() + currentOperand;
            setTotal(displayedCalculation);
        }
        setPressedNumbers([]);
    }

    function addition(currentOperand) {
        let currentRef = displayedCalculation.slice(0, -1);
        currentRef = parseInt(currentRef, 10) + parseInt(pressedNumbers, 10);
        currentRef = (currentRef.toString() + currentOperand);
        displayedCalculation = currentRef;
        setTotal(currentRef);
    }

    return (
        <div className="flex flex-col justify-center border-2 w-48 mx-auto py-4 rounded-xl bg-zinc-200 border-zinc-600 shadow-xl">
            <div className="flex justify-center items-center h-14 bg-zinc-800 mx-2 mb-2 rounded-lg">
                <h1 className="text-lg text-zinc-200 font-semibold">{total}{pressedNumbers}</h1>
            </div>
            <div className="h-px bg-zinc-700 mb-2" />
            <CalculatorButtons numbers={numbers} onClick={handleClick} />
        </div>
    );
}