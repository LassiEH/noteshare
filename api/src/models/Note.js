"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Note {
    constructor(content, id) {
        this.content = content;
        this.id = id !== null && id !== void 0 ? id : crypto.randomUUID();
    }
    toJSON() {
        return {
            id: this.id,
            content: this.content
        };
    }
}
exports.default = Note;
//# sourceMappingURL=Note.js.map