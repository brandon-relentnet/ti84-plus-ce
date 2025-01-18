export default function ({ children, onClick, value }) {
    return (
        <button
        onClick={onClick}
        value={value}
        className="text-zinc-200 bg-zinc-900 border-2 border-transparent hover:border-zinc-400 transition duration-150 active:border-zinc-600 rounded active:scale-110"
        >
            {children}
        </button>
    );
}