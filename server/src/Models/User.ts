import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  confirmPassword?: string;
  matchPassword: (enteredPassword: string) => Promise<boolean>;
}

const userSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (this: IUser, value: string): boolean {
        return value === this.password;
      },
      message: "Passwords do not match",
    },
  },
});

userSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.matchPassword = async function (
  enteredPassword: string
): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model<IUser>("User", userSchema);
