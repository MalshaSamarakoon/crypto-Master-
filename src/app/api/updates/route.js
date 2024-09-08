import connectMongoDB from "../../../lib/mongodb";
import Update from "../../../models/update";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, image } = await request.json();
  await connectMongoDB();

  // Extract the base64-encoded image data
  const imageData = image && image.split(";base64,").pop();

  // Build the image path
  const imagePath = imageData ? `/uploads/${name}.png` : null;

  // Save the base64 image data to a file if available
  if (imageData) {
    const fs = require("fs");
    const path = require("path");

    // Create the uploads directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Write the image file
    const imageBuffer = Buffer.from(imageData, "base64");
    const imageFilePath = path.join(uploadDir, `${name}.png`);
    fs.writeFileSync(imageFilePath, imageBuffer);
  }

  // Create a new update with the image path
  await Update.create({ name, image: imagePath });

  return NextResponse.json({ message: "Image Posted" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const updates = await Update.find();
  return NextResponse.json({ updates });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Update.findByIdAndDelete(id);
  return NextResponse.json({ message: "Post deleted" }, { status: 200 });
}
