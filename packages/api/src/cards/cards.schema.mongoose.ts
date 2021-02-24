import * as mongoose from 'mongoose'

export const CardsSchema = new mongoose.Schema({
  title: String,
  comm: String,
  body: String,
})
