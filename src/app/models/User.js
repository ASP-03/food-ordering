import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    name: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String},
    image: {type: String},
    phone: {type: String},
    streetAddress: {type: String},
    city: {type: String},
    pinCode: {type: String},
    country: {type: String},
    admin: {type: Boolean, default: false},
 }, {timestamps: true})

export const User = models?.User || model('User', UserSchema);