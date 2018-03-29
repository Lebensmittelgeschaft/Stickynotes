import { Schema, model, Document } from 'mongoose';

export interface IRoom extends Document {
    _id: Schema.Types.ObjectId;
    users: { type: string, ref: 'user' }[];
    name: string;
    notes: { type: Schema.Types.ObjectId, ref: 'note' }[];
    isActive: boolean;
    owner: { type: string, ref: 'user' }
    timestamp: number;
}

const roomSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
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