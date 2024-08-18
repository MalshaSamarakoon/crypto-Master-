import connectMongoDB from "../../../../lib/mongodb";
import Course from "../../../../models/course";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newMode: mode,
    newType: type,
    newTitle: title,
    newDescription: description,
    newCourseDescription: courseDescription,
    newPrice: price,
    newDuration: duration,
    newPriceDescription: priceDescription,
    newCourseContent: courseContentItems,
    newInformation: informationItems,
  } = await request.json();

  await connectMongoDB();
  await Course.findByIdAndUpdate(id, {
    mode,
    type,
    title,
    description,
    courseDescription,
    price,
    duration,
    priceDescription,
    courseContent: courseContentItems, 
    information: informationItems
  });
  return NextResponse.json({ message: "Course updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const course = await Course.findOne({ _id: id });
  return NextResponse.json({ course }, { status: 200 });
}

