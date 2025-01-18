import Button from "../Button"

export default function CalculatorButton({ numbers, onClick }) {

    return (
        <div className="grid grid-cols-3 mx-auto w-40 gap-2">
            {numbers.map((number) => (
                <Button onClick={onClick} key={number} value={number}>{number}</Button>
            ))}
        </div>
    )
}