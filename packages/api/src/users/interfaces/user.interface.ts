import { Document } from 'mongoose'

export interface User extends Document {
    email: string;
    email2: string;
    password: string;
    nameFirst: string;
    nameLast: string;
    tel: string;
    city: string;
}
