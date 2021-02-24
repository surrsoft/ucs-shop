import * as mongoose from 'mongoose'

export const UsersSchema = new mongoose.Schema({
  email: {type: String, unique: true},
  email2: String,
  password: String,
  nameFirst: {type: String},
  nameLast: {type: String},
  tel: String,
  city: String
}, {
  timestamps: true
})
