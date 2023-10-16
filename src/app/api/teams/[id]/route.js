import connectMongoDB from "@/src/libs/mongodb";
import Team from "../../../models/team";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newName: name, newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Team.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Member updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const team = await Team.findOne({ _id: id });
  return NextResponse.json({ team }, { status: 200 });
}
