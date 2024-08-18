import mongoose, { Schema } from "mongoose";

const typeSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

const Type = mongoose.models.Type || mongoose.model("Type", typeSchema);

export default Type;
