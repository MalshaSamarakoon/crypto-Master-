"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import YoutubeVideo from "@/app/components/YoutubeVideo";

export default function CourseDetails() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("_id");

  interface CourseDetails {
    image: string;
    priceDescription: string;
    price: string;
    title: string;
    duration: string;
    courseContent: string[];
    courseDescription: string;
    information: string[];
  }

  const [courseDetails, setCourseDetails] = useState<CourseDetails | null>(
    null
  );

  useEffect(() => {
    if (courseId) {
      fetch(`${process.env.BASE_URL}/api/courses/${courseId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch course details");
          }
          return response.json();
        })
        .then((data) => {
          setCourseDetails(data.course);
        })
        .catch((error) =>
          console.error("Error fetching course details:", error)
        );
    }
  }, [courseId]);

  return (
    <div>
      {courseDetails ? (
        <main>
          <section className="min-h-main flex flex-col justify-center sm:px-6 lg:px-0">
            <section className=" relative">
              <div
                className="layout flex min-h-screen flex-col py-1"
                style={{
                  backgroundImage: `url(${courseDetails.image})`,
                  backgroundSize: "cover",
                }}
              >
                <div>
                  <h1
                    className="mb-20 text-white lg:mt-20 sm:mt-10 md:text-5xl md:leading-snug"
                    data-fade="2"
                  >
                    {courseDetails.title}
                  </h1>
                </div>
                <div className=" mb-20 grid lg:grid-cols-2 lg:gap-40 sm:grid-cols-1">
                  <div className=" col-span-1 lg:mt-10 sm:mt-0 text-xl leading-relaxed text-gray-200 opacity-80 md:text-lg">
                    {courseDetails.courseDescription}
                  </div>

                  <div className="col-span-1 p-10 sm:mt-10 lg:mt-0">
                    <div className=" text-gray-200">
                      <p className="mb-10 text-4xl font-bold">
                        {courseDetails.price}{" "}
                      </p>
                      <p className="text-2xl ">
                        Duration : {courseDetails.duration}{" "}
                      </p>
                      <p className="text-s mb-20 mt-3">
                        {courseDetails.priceDescription}
                      </p>
                    </div>
                    <div className="mt-8">
                      <button className="h-12 sm:w-60 lg:w-80 rounded-md bg-amber-500 text-lg font-semibold text-white transition duration-300 ease-in-out hover:bg-amber-600">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="layout ">
                <div className=" mb-20 grid lg:grid-cols-2 lg:gap-40 sm:grid-cols-1">
                  <img
                    className="h-[300px]  rounded-lg lg:mt-20 sm:mt-0"
                    src={courseDetails.image}
                    alt={courseDetails.title}
                  />
                  <div className=" col-span-1 text-xl leading-relaxed text-gray-200 opacity-80 md:text-lg sm:mt-10 lg:mt-0">
                    <h1 className="text-4xl md:text-6xl">
                      <div className="inline decoration-clone leading-snug dark:leading-none ">
                        Course Content
                      </div>
                    </h1>

                    <ul className="prose dark:prose-invert mt-10 ">
                      {courseDetails.courseContent.map((item, index) => (
                        <li key={index} className="text-1xl mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-gray-200">
                  <ul>
                    {courseDetails.information.map((item, index) => (
                      <li key={index} className="text-1xl mb-2">
                        <p
                          className="mb-5"
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <span
                            className="mr-2 text-amber-500"
                            style={{ marginRight: "0.5rem" }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              className="bi bi-check-circle"
                              viewBox="0 0 16 16"
                              width="20"
                              height="20"
                            >
                              <path d="M0 0h16v16H0z" fill="none" />
                              <path d="M8 0a.5.5 0 0 1 .5.5V14a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z" />
                              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 2.207 2.354 7.854a.5.5 0 1 1-.708-.708l6-6z" />
                            </svg>
                          </span>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </section>
        </main>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
