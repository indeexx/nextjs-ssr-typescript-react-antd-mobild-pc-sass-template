/*
 * @Author: indeex
 * @Date: 2019-05-19 19:54:39
 * @Email: indeex@qq.com
 */
import mongoose, { Model } from "mongoose"

const { DATABASE_URL } = process.env

export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch(err => console.log(err))
  console.log("Mongoose Connection Established")

  const TodoSchema = new mongoose.Schema({
    item: String,
    completed: Boolean,
  })

  const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema)

  return { conn, Todo }
}