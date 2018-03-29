import { Schema, model, Document } from 'mongoose';

export interface INote extends Document {
    _id: Schema.Types.ObjectId;
    color: String;
    header: String;
    content: String;
    position: { x: number, y: number };
    creationdate: Date;
    updatedate: Date;
}

const noteSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        unique: true,
        required: true,
    },
    color: {
        type: String,
        default: 'yellow',
    },
    header: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    position: {
        type: { x: Number, y: Number },
        default: { x: 15, y: 15 },
    },
    creationdate: {
        type: Number,
        default: new Date(),
    },
    updatedate: {
        type: Number,
        default: new Date(),
    },
});

export const note = model<INote>('note', noteSchema);