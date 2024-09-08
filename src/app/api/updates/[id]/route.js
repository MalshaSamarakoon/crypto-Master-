import connectMongoDB from "../../../../lib/mongodb";
import Update from "../../../../models/update";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newName: name } = await request.json();
  await connectMongoDB();
  await Update.findByIdAndUpdate(id, { name });
  return NextResponse.json({ message: "Posted" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const update = await Update.findOne({ _id: id });
  return NextResponse.json({ update }, { status: 200 });
}
