import { room as Room, IRoom } from './room.model'
import * as mongoose from 'mongoose';

export class NoteService {
    save(note: INote) {
        return note.save();
    }

    getById(id: mongoose.Schema.Types.ObjectId) {
        return Note.findById(id);
    }

    updateById(id: mongoose.Schema.Types.ObjectId, note: Partial<INote>) {
        return Note.findByIdAndUpdate(id, note, { new: true });
    }

    deleteById(id: mongoose.Schema.Types.ObjectId) {
        return Note.findByIdAndRemove(id);
    }

}