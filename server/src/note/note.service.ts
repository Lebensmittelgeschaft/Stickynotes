import { note as Note, INote } from './note.model'
import * as mongoose from 'mongoose';

export class NoteService {
    static save(note: INote) {
        return note.save();
    }

    static getById(id: mongoose.Schema.Types.ObjectId) {
        return Note.findById(id);
    }

    static updateById(id: mongoose.Schema.Types.ObjectId, note: Partial<INote>) {
        return Note.findByIdAndUpdate(id, note, { new: true });
    }

    static deleteById(id: mongoose.Schema.Types.ObjectId) {
        return Note.findByIdAndRemove(id);
    }

}