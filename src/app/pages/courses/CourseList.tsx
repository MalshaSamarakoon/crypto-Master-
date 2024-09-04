import React from "react";
import CourseCard from "@/app/components/CourseCard";

// Define the type for a single course
interface Course {
  _id: string;
  type: string;
  // Add other properties as needed
}

// Define the type for the grouped courses
interface GroupedCourses {
  [type: string]: Course[];
}

const getCourses = async (): Promise<GroupedCourses | undefined> => {
  try {
    const res = await fetch("http://localhost:3000/api/courses", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch courses");
    }

    const data = await res.json();

    // Ensure TypeScript knows the structure of `data.courses`
    const courses: Course[] = data.courses;

    // Group courses by type
    const groupedCourses = courses.reduce((acc: GroupedCourses, course: Course) => {
      const { type } = course;
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(course);
      return acc;
    }, {} as GroupedCourses);

    return groupedCourses;
  } catch (error) {
    console.log("Error loading courses: ", error);
  }
};

export default async function CourseList() {
  const groupedCourses = await getCourses();

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
