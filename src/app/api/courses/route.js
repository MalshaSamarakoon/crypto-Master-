import connectMongoDB from "../../../lib/mongodb";
import Course from "../../../models/course";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { mode, title, description, courseDescription, price, duration, priceDescription } = await request.json();
  await connectMongoDB();
  await Course.create({ mode, title, description, courseDescription, price, duration, priceDescription });
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
