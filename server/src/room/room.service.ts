import { room as Room, IRoom } from './room.model'
import * as mongoose from 'mongoose';

export abstract class RoomService {
    static save(room: IRoom) {
        return room.save();
    }

    static getById(id: mongoose.Schema.Types.ObjectId) {
        return Room.findById(id);
    }

    static updateById(id: mongoose.Schema.Types.ObjectId, room: Partial<IRoom>) {
        return Room.findByIdAndUpdate(id, room, { new: true });
    }

    static deleteById(id: mongoose.Schema.Types.ObjectId) {
        return Room.findByIdAndRemove(id);
    }

    static getAllNotesInARoom(id: mongoose.Schema.Types.ObjectId) {
        return Room.findById(id,'notes').populate('notes');
    }
}