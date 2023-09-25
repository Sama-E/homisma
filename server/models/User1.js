import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    address: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    zipcode: {
      type: String,
      default: "",
    },
    phoneNumber: {
      type: String,
      min:10,
      max: 10,
    },
    company: {
      type: String,
      default: "",
    },
    occupation: {
      type: String,
      default: "",
    },
    profilePicPath: {
      type: String,
      default: "",
    },
    housePicPath:{
      type: Array,
      default: [],
    },
    associates: {
      type: Array,
      default: [],
    },
    transactions: {
      type: Array,
      default: [],
    },
    role: {
      type: String,
      enum: ["user", "pro", "admin"],
      default:"user"
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;