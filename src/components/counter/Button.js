export default function Button( {increase, decrease} ) {
    return (
        <div>
            <button
                onClick={decrease}
                className="bg-red-500 mr-2 p-2 hover:bg-green-500 transition duration-500">
                -
            </button>
            <button
                onClick={increase}
                className="bg-green-500 mr-2 p-2 hover:bg-red-500 transition duration-500">
                +
            </button>
        </div>
    );
}