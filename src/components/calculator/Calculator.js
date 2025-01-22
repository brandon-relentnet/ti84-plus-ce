"use client";

import CalculatorButtons from "./CalculatorButtons";
import { useState } from "react";

const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "(-)"];
const operands = ["÷", "×", "-", "+", "enter"];
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

    function subtraction() {

    }

    return (
        <div className="flex flex-col justify-center w-96 mx-auto py-4 rounded-[2rem] bg-zinc-900 shadow-xl">
            <div className="h-28 bg-zinc-950 mx-4 mb-4 rounded-xl px-4 py-2">
                <div className="flex justify-center h-full w-full items-center overflow-hidden bg-zinc-100 z-10">
                    <h1 id="calculator-font" className="text-6xl text-zinc-950 font-semibold">{total}{pressedNumbers}</h1>
                </div>
            </div>
            <div className="h-px bg-zinc-800 mb-4" />
            <CalculatorButtons numbers={numbers} operands={operands} onClick={handleClick} />
        </div>
    );
}