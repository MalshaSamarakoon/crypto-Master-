import connectMongoDB from "../../../lib/mongodb";
import Course from "../../../models/course";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    mode,
    title,
    description,
    courseDescription,
    price,
    duration,
    priceDescription,
    image,
    courseContent,
    information,
  } = await request.json();

  await connectMongoDB();

    // Extract the base64-encoded image data
    const imageData = image && image.split(";base64,").pop();

    // Build the image path
    const imagePath = imageData ? `/courseUploads/${title}.png` : null;
  
    // Save the base64 image data to a file if available
    if (imageData) {
      const fs = require("fs");
      const path = require("path");
  
      // Create the uploads directory if it doesn't exist
      const uploadDir = path.join(process.cwd(), "public/courseUploads");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
  
      // Write the image file
      const imageBuffer = Buffer.from(imageData, "base64");
      const imageFilePath = path.join(uploadDir, `${title}.png`);
      fs.writeFileSync(imageFilePath, imageBuffer);
    }

  const courseContentArray = Array.isArray(courseContent)
    ? courseContent
    : [courseContent];

  const informationArray = Array.isArray(information)
    ? information
    : [information];

    await Course.create({
      mode,
      title,
      description,
      courseDescription,
      price,
      duration,
      priceDescription,
      image: imagePath, 
      courseContent: courseContentArray,
      information: informationArray,
    });
  return NextResponse.json({ message: "Course Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const courses = await Course.find();
  return NextResponse.json({ courses });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Course.findByIdAndDelete(id);
  return NextResponse.json({ message: "Course deleted" }, { status: 200 });
}
