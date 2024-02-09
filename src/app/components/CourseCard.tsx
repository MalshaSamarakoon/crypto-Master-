import React from "react";
import Button from "@/components/buttons/Button";
import Link from "next/link";

const getcourses = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/courses`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch courses");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading courses: ", error);
  }
};

export default async function CourseCard() {
  const { courses } = (await getcourses()) || {};

  return (
    <>
      {courses.map((m: any) => (
        <div key={m._id}>
          <div className="bg-bg-dark relative items-center rounded-[15px] border-[2px] border-[#d9b157] pb-8 text-center text-[#E7F1FB] shadow-xl">
            <img
              className="h-[150px] w-full rounded-t-[15px] object-cover object-top"
              src={m.image} 
              alt={m.title}
              />
            <div className="absolute top-0 left-0 bg-red-500 rounded-[8px] text-white text-s p-1 m-4 rounded-bl-md">
              {m.mode}
            </div>
            <h3 className="relative mb-5 mt-5 text-[#E7F1FB]">{m.title}</h3>
            <p className="p-4 text-sm leading-[21px] mb-10">{m.description}</p>

            <Link href={`/pages/courses/CourseDetails?_id=${m._id}`}>
              <Button
                className="absolute bottom-4 right-4 border border-amber-400 text-amber-400 hover:bg-neutral-700 dark:hover:bg-neutral-700"
                variant="outline"
              >
                More Details
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
