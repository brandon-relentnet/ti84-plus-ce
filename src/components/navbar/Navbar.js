import Link from "next/link";

const endpoints = [
    { name: "Home", path: "/" },
    { name: "Counter", path: "/counter" }
];

export default function Navbar() {
    return (
        <nav className="flex justify-center bg-violet-300">
            {endpoints.map((point) => (
                <Link
                    key={point.name}
                    href={point.path}
                    className="p-2 hover:underline"
                >
                    {point.name}
                </Link>
            ))}
        </nav>
    );
}