export default class Note {
    id: number;
    content: string;

    constructor(content: string, id?: number) {
        this.content = content;
        this.id = id ?? Date.now();
    }
}