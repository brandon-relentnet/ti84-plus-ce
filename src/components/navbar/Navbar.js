import Link from "next/link";

const endpoints = [
    { name: "Home", path: "/" },
    { name: "Counter", path: "/counter" },
    { name: "Calculator", path: "/calculator" }
];

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full flex justify-center items-center h-16 bg-violet-300">
            {endpoints.map((point) => (
                <Link
                    key={point.name}
                    href={point.path}
                    className="m-2 hover:underline"
                >
                    {point.name}
                </Link>
            ))}
        </nav>
    );
}