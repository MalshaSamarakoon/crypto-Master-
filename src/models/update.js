import mongoose, { Schema } from "mongoose";

const updateSchema = new Schema(
  {
    name: String,
    image: String, 
  },
  {
    timestamps: true,
  }
);

const Update = mongoose.models.Update || mongoose.model("Update", updateSchema);

export default Update;
 
