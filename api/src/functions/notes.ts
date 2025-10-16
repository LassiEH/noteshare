import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import Note from "../models/Note";

let notesStore: Note[] = [];

export async function notes(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const method = request.method.toUpperCase();

    if (method === "GET") {
        return {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(notesStore),
        };
    }

    else if (method === "POST") {
        const data = await request.json() as { content: string };
        if (!data.content) {
            return { status: 400, body: "Missing 'text'" };
        }
        const note = new Note(data.content);
        notesStore.push(note);
        return {
            status: 201,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(note),
        };
    }

    else if (method === "DELETE") {
        const id = request.query.get("id");
        if (!id) return { status: 400, body: "Missing 'id'" };
        notesStore = notesStore.filter(n => n.id !== id);
        return { status: 200, body: JSON.stringify({ deleted: id }) };
    }

    return { status: 405, body: "Method not allowed" };
}

app.http('notes', {
    methods: ['GET', 'POST', 'DELETE'],
    authLevel: 'anonymous',
    handler: notes
});
