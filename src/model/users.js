import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
    },
  },
  {
    timestamps: true, // tự động tạo createdAt và updatedAt
    collection: "users", // tên collection rõ ràng (không cần nó tự suy diễn)
  }
);

// Tránh lỗi OverwriteModelError khi dùng Next.js (hot reload)
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
