import { Schema, model, Document } from 'mongoose';

export interface INotification extends Document {
    _id: Schema.Types.ObjectId;
    content: string;
    timestamp: Date;
    title: string;
    receiver: { type: Schema.Types.ObjectId, ref: 'user' };
}

const notificationSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
    },
    content: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true,
        default: new Date()
    },
    title: {
        type: String,
        required: true,
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
});

// Used for avoiding client from modifying the timestamp
notificationSchema.pre('save', function (this: INotification, next) {
    this.timestamp = new Date();
    next();
});

export const notification = model<INotification>('notification', notificationSchema);