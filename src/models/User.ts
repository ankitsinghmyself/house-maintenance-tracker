import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    username: string;
    password: string;
    role: 'user' | 'admin';
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;
