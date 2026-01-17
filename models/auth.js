import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, minlength: 2 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String },
    isEmailVerified:{type:Boolean,default:false},
    lastLogin:{type:Date},
    is2FAEnabled:{type:Boolean,default:false},
    twoFAOtp:{type:String,select:false},
    twoFAOtpExpiry:{type:Date,select:false},
    

  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
