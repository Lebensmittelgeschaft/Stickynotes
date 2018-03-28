import { NoteService } from './note.service';
import { RoomService } from '../room/room.service';
import {INote} from './note.model';
import * as mongoose from 'mongoose';

export class NoteController {

    static saveNote(note: INote) {
      return NoteService.save(note);
    }

    static getNoteById(id: mongoose.Schema.Types.ObjectId) {
        return NoteService.getById(id);
    }

    static updateNoteById(id: mongoose.Schema.Types.ObjectId, note: Partial<INote>) {
        return NoteService.updateById(id, note);
    }

    static deleteNoteById(id: mongoose.Schema.Types.ObjectId) {
        return NoteService.deleteById(id);
    }

    static getAllNotesInRoom(id: mongoose.Schema.Types.ObjectId) {
        return RoomService.getAllNotesInARoom(id)
    }
  }
