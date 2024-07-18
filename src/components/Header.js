import { auth } from "@/appwrite/auth";
import Link from "next/link";

export default function Header() {
    const { user } = auth;

    const logoutUser = async () => {
        "use server";
        auth.signOut();
    };

    return (
        <div className="border-b border-gray-200 p-2 flex justify-between">
            <Link href="/">
                <h1 className="text-2xl font-bold italic">MyLogo</h1>
            </Link>
            {user ? (
                <div className="flex gap-4 items-center">
                    <p>Welcome {user.name} 👋</p>
                    <form action={logoutUser}>
                        <button>Logout</button>
                    </form>
                </div>
            ) : (
                <Link href="/login">Login</Link>
            )}
        </div>
    );
}
