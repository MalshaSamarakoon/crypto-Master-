import mongoose, { Schema } from "mongoose";

const updateSchema = new Schema(
  {
    image: String, 
  },
  {
    timestamps: true,
  }
);

const Update = mongoose.models.Update || mongoose.model("Update", updateSchema);

export default Update;
 