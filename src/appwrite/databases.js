import { cookies } from "next/headers";
import { createSessionClient } from "@/appwrite/config";

const db = {
    notes: {
        list: async (...params) => {
            const sessionCookie = cookies().get("session");
            const { databases } = await createSessionClient(
                sessionCookie?.value
            );

            return await databases.listDocuments(
                process.env.NEXT_PUBLIC_DATABASE_ID,
                process.env.NEXT_PUBLIC_COLLECTION_ID_NOTES,
                ...params
            );
        },

        get: async (id) => {
            const sessionCookie = cookies().get("session");
            const { databases } = await createSessionClient(
                sessionCookie?.value
            );

            return databases.getDocument(
                process.env.NEXT_PUBLIC_DATABASE_ID,
                process.env.NEXT_PUBLIC_COLLECTION_ID_NOTES,
                id
            );
        },
    },
};

export default db;
