import mongoose, { Schema } from "mongoose";

const teamSchema = new Schema(
  {
    name: String,
    title: String,
    description: String,
    image: String, 
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.models.Team || mongoose.model("Team", teamSchema);

export default Team;
 