import connectMongoDB from "../../../../lib/mongodb";
import Type from "../../../../models/type";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name } = await request.json();
  await connectMongoDB();
  await Type.create({ name });
  return NextResponse.json({ message: "Member Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const types = await Type.find();
  return NextResponse.json({ types });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Type.findByIdAndDelete(id);
  return NextResponse.json({ message: "Member deleted" }, { status: 200 });
}
