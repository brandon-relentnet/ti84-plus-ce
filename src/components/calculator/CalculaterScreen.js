import { useRef, useEffect } from "react";

export default function CalculatorScreen({
    total,
    pressedNumbers,
    cursorPosition,
    history
}) {
const screenRef = useRef(null);

useEffect(() => {
    if (screenRef.current) {
        screenRef.current.scrollTop = screenRef.current.scrollHeight;
    }
}, [history]);

    return (
        <div className="h-48 bg-zinc-950 mx-4 mb-4 rounded-xl px-4 py-2">
            <div ref={screenRef} className="min-h-full max-h-44 w-full overflow-y-auto bg-zinc-100 z-10 p-2">
                <div>
                    {history.map((entry, index) => (
                        <div
                            key={index}
                            id="calculator-font"
                            className="text-zinc-950 font-semibold"
                        >
                            <span className="text-lg ml-1 tracking-[6px] subpixel-antialiased">{entry.calculation}</span>
                            <div id="calculator-font" className="flex justify-end">
                                <span className="text-lg mr-1 tracking-[6px] subpixel-antialiased">{entry.result}</span>
                            </div>
                            <div className="border-b-2 border-dotted mb-1 border-zinc-950"></div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center w-full">
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
                            height: "22px",
                            backgroundColor: "black"
                        }}
                        >
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};