import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    // T....
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    job: string;
}

const userSchema = new Schema({
    _id: {
        type: String,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    job: {
        type: String,
        required: true,
    },
});

export const user = model<IUser>('user', userSchema);