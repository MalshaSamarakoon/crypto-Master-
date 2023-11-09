import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema(
  {
    mode: String,
    title: String,
    description: String,
    courseDescription: String,
    price: String,
    duration: String,
    priceDescription: String,
    courseContent: [String],
    information: [String]
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Course;
 