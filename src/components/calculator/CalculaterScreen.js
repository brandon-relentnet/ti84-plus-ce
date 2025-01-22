import { useState } from "react";

export default function CalculatorScreen({ total, pressedNumbers, cursorPosition, setCursorPosition }) {

    return (
        <div className="h-48 bg-zinc-950 mx-4 mb-4 rounded-xl px-4 py-2">
            <div className="flex justify-center h-full w-full items-center overflow-hidden bg-zinc-100 z-10">
                {pressedNumbers.map((char, index) => (
                    <span
                        key={index}
                        id="calculator-font"
                        className="text-zinc-950 font-semibold"
                        style={{
                            backgroundColor: index === cursorPosition ? "black" : "transparent",
                            color: index === cursorPosition ? "white" : "black",
                            display: "inline-block",
                            width: "12px",
                            textAlign: "center",
                        }}
                    >
                        {char}
                    </span>
                ))}
                {cursorPosition === pressedNumbers.length && (
                    <span style={{
                        display: "inline-block",
                        width: "12px",
                        height: "18px",
                        backgroundColor: "black"
                    }}
                    >
                    </span>
                )}
            </div>
        </div>
    );
};