import { Schema, model } from "mongoose";

const schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verify: {
    type: String,
    default: "pendiente",
  },
  codeVerify: {
    type: String,
    required: true,
  },
  connected: {
    type: Boolean,
    default: false,
  },
});

export default model("User", schema);
