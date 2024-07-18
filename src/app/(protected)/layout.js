import { redirect } from "next/navigation";
import { getUser, auth } from "@/appwrite/auth";
import Header from "@/components/Header";

export default async function AuthLayout({ children }) {
    let user = await auth.getUser();

    if (!user) {
        redirect("/login");
    }

    return (
        <>
            <Header />
            <main className="container mx-auto  w-[600px] pt-10">
                {children}
            </main>
        </>
    );
}
