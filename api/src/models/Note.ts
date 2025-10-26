export default class Note {
    id: string;
    content: string;

    constructor(content: string, id?: string) {
        this.content = content;
        this.id = id ?? crypto.randomUUID();
    }

    toJSON() {
        return {
            id: this.id,
            content: this.content
        };
    }
}