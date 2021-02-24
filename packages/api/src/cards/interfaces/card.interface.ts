import { Document } from 'mongoose'

export interface Card extends Document {
  title: string;
  comm: string;
  body: string;
}
