"use client";

import CalculatorScreen from "./CalculaterScreen";
import CalculatorButtons from "./CalculatorButtons";
import { useState } from "react";

const arrows = ["<", ">"];
const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "(-)"];
const operands = ["÷", "×", "-", "+", "enter"];
let previousNumbers = "";
let totalOperandsPressed = 0;
let displayedCalculation = "";

export default function Calculator() {
    const [pressedNumbers, setPressedNumbers] = useState([]);
    const [lastPressed, setLastPressed] = useState("");
    const [total, setTotal] = useState("");
    const [cursorPosition, setCursorPosition] = useState(0);
    const [history, setHistory] = useState([]);

    const handleClick = (e) => {
        const currentChar = e.target.value;

        if (currentChar === "enter") {
            handleEnter();
            return;
        }

        if (operands.includes(lastPressed)
            && operands.includes(currentChar)
            && lastPressed === currentChar
        ) {
            console.log("Flag");
            return;
        }

        const updatedPressedNumbers = [
            ...pressedNumbers.slice(0, cursorPosition),
            currentChar,
            ...pressedNumbers.slice(cursorPosition),
        ];

        setPressedNumbers(updatedPressedNumbers);
        setLastPressed(currentChar);
        setCursorPosition(cursorPosition + 1);
    }

    const handleArrowKey = (e) => {
        if (e.target.value === "<" && cursorPosition > 0) {
            setCursorPosition(cursorPosition - 1);
        } else if (e.target.value === ">" && cursorPosition < pressedNumbers.length) {
            setCursorPosition(cursorPosition + 1);
        }
    };

    const handleEnter = () => {
        const currentCalculation = pressedNumbers.join("");
        const result = evaluateExpression(currentCalculation);

        setHistory((previousHistory) => [
            ...previousHistory,
            { calculation: currentCalculation, result },
        ]);

        setPressedNumbers([]);
        setCursorPosition(0);
        setTotal(result.toString());
    }; 

    const evaluateExpression = (expression) => {
        try { 
            const sanitizedExpression = expression
                .replace(/÷/g, "/")
                .replace(/×/g, "*");
            return eval(sanitizedExpression);
        } catch {
            return "evaluation error";
        }
    };

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
            <CalculatorScreen
                total={total}
                pressedNumbers={pressedNumbers}
                cursorPosition={cursorPosition}
                history={history}
            />
            <div className="h-px bg-zinc-800 mb-4" />
            <CalculatorButtons
                numbers={numbers}
                operands={operands}
                arrows={arrows}
                handleArrowKey={handleArrowKey}
                onClick={handleClick}
            />
        </div>
    );
}