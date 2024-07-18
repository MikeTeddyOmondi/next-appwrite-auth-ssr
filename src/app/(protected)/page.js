import db from "@/appwrite/databases";
import Link from "next/link";
import { Query } from "node-appwrite";

export default async function Home() {
    const { documents: notes, total } = await db.notes.list();

    return (
        <div>
            <h3 className="text-2xl py-4">My List:</h3>
            <div>
                {notes.map((note) => (
                    <div
                        className="py-4 bg-gray-100 my-2 p-2 rounded-md"
                        key={note.$id}
                    >
                        <Link href={`/note/${note.$id}`}>
                            <p>{note.body}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
