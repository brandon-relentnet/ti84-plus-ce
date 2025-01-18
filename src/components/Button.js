export default function ({ children, onClick, value }) {
    return (
        <button
        onClick={onClick}
        value={value}
        className="bg-fuchsia-100 border-2 border-transparent hover:border-fuchsia-300 transition duration-150 active:border-fuchsia-500 rounded active:scale-110"
        >
            {children}
        </button>
    );
}