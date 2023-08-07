import mongoose from "mongoose";

mongoose.connect("mongodb+srv://amaral:213057@alura.xhczh9v.mongodb.net/alura-node?");

let db = mongoose.connection;

export default db;