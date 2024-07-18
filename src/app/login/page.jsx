import LoginForm from "@/components/LoginForm";
import { redirect } from "next/navigation";
import { auth } from "@/appwrite/auth";

export default async function Login() {
    const user = await auth.getUser();

    if (user) {
        redirect("/");
    }

    return (
        <main className="container mx-auto  w-[600px] pt-24">
            <LoginForm />
        </main>
    );
}
