import { Model, Schema, model } from 'mongoose';

export const userSchema = new Schema({}, { timestamps: true });

export const User = model('User', userSchema);
