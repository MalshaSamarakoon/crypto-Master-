import React from "react";
import Button from "@/components/buttons/Button";
import Link from "next/link";

// Define the type for the course prop
interface Course {
  image?: string;
  title: string;
  description: string;
  mode: string;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div>
      <div className="bg-bg-dark relative items-center border-[2px] border-[#d9b157] pb-8 text-center text-[#002147] shadow-xl">
        {course.image && (
          <img
            className="h-[150px] w-full object-cover object-top"
            src={course.image}
            alt={course.title}
          />
        )}
        <div className="absolute top-0 left-0 bg-red-500 rounded-[8px] text-[#002147] text-s p-1 m-4 rounded-bl-md">
          {course.mode}
        </div>
        <h3 className="relative mb-5 mt-5 text-[#002147]">{course.title}</h3>
        <p className="p-4 text-[#002147] text-sm leading-[21px] mb-0">{course.description}</p>

        {/* Uncomment if needed */}
        {/* <Link href={`/pages/courses/CourseDetails?_id=${course._id}`}>
          <Button
            className="absolute bottom-4 right-4 border border-amber-400 text-amber-400 hover:bg-neutral-700 dark:hover:bg-neutral-700"
            variant="outline"
          >
            More Details
          </Button>
        </Link> */}
      </div>
    </div>
  );
}
