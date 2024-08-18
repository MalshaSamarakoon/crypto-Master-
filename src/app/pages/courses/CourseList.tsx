import React from "react";
import CourseCard from "@/app/components/CourseCard";

const getcourses = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/courses", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch courses");
    }

    const data = await res.json();

    // Group courses by type
    const groupedCourses = data.courses.reduce((acc:any, course:any) => {
      const { type } = course;
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(course);
      return acc;
    }, {});

    return groupedCourses;
  } catch (error) {
    console.log("Error loading courses: ", error);
  }
};

export default async function CourseList() {
  const groupedCourses = await getcourses();

  if (!groupedCourses) {
    return <p>Error loading courses.</p>;
  }

  return (
    <div className="w-full space-y-32">
      {Object.entries(groupedCourses).map(([type, courses]) => (
        <div key={type}>
          <h2
            id={type.replace(/\s+/g, "-").toLowerCase()}
            className="text-2xl font-bold text-black mb-6"
          >
            {type}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
