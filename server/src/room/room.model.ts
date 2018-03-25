import { Schema, model, Document } from 'mongoose';

export interface IRoom extends Document {
    _id: Schema.Types.ObjectId;
    //users: { type: Schema.Types.ObjectId, ref: 'user' }[];
    users: { type: string, ref: 'user' }[];
    name: string;
    notes: { type: Schema.Types.ObjectId, ref: 'note' }[];
    isActive: boolean;
    //owner: { type: Schema.Types.ObjectId, ref: 'user' }
    owner: { type: string, ref: 'user' }
    timestamp: number;
}

const roomSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        unique: true,
        required: true,
    },
    users: [{
        type: String,
        ref: 'user',
        required: true,
        default: []
    }],
    name: {
        type: String,
        required: true,
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'note',
        required: true,
    }],
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
    owner: {
        type: String,
        ref: 'user',
        required: true
    },
    timestamp: {
        type: Number,
        default: new Date().getTime(),
    },
});

export const room = model<IRoom>('room', roomSchema);