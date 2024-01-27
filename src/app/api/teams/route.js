import connectMongoDB from "../../../lib/mongodb";
import Team from "../../../models/team";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, title, description, image } = await request.json();
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

  // Create a new team with the image path
  await Team.create({ name, title, description, image: imagePath });

  return NextResponse.json({ message: "Member Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const teams = await Team.find();
  return NextResponse.json({ teams });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Team.findByIdAndDelete(id);
  return NextResponse.json({ message: "Member deleted" }, { status: 200 });
}
