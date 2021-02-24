import { Document } from 'mongoose'

export interface IProduct extends Document {
  name: string
  prodcatCode: string
  prodcatName: string
  prodsubcatCode: string
  prodsubcatName: string
  size: string
  color: string
  url: string
  costDollar: number
}
