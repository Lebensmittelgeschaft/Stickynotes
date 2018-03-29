import { RoomService } from './room.service';
import { IRoom } from './room.model';
import * as mongoose from 'mongoose';

export class RoomController {

    static saveRoom(room: IRoom) {
        return RoomService.save(room);
    }

    static getRoomById(id: mongoose.Schema.Types.ObjectId) {
        return RoomService.getById(id);
    }

    static updateRoomById(id: mongoose.Schema.Types.ObjectId, room: Partial<IRoom>) {
        return RoomService.updateById(id, room);
    }

    static deleteRoomById(id: mongoose.Schema.Types.ObjectId) {
        return RoomService.deleteById(id);
    }

}
