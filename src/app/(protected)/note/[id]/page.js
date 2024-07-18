import React from "react";
import db from "@/appwrite/databases";

const Note = async ({ params: { id } }) => {
    const note = await db.notes.get(id); //auth.getNote(id);

    return <div>{note.body}</div>;
};

export default Note;
