import { cookies } from "next/headers";
import { createSessionClient, createAdminClient } from "@/appwrite/config";
import { redirect } from "next/navigation";

export const auth = {
    user: null,

    getUser: async () => {
        if (auth.user) {
            return auth.user;
        }

        const sessionCookie = cookies().get("session");
        const { account } = await createSessionClient(sessionCookie?.value);
        try {
            auth.user = await account.get();
        } catch (error) {}

        return auth.user;
    },
    signOut: async () => {
        const sessionCookie = cookies().get("session");
        const { account } = await createSessionClient(sessionCookie?.value);

        account.deleteSession("current");
        cookies().delete("session");
        auth.user = null;
    },

    createSession: async (formData) => {
        "use server";
        const data = Object.fromEntries(formData);
        const { email, password } = data;
        const { account } = await createAdminClient();

        const session = await account.createEmailPasswordSession(
            email,
            password
        );

        cookies().set("session", session.secret, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            expires: new Date(session.expire),
            path: "/",
        });
        redirect("/");
    },
};
