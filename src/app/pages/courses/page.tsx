import clsx from "clsx";
import Head from "next/head";
import * as React from "react";
import useLoaded from "@/hooks/useLoaded";
import CourseList from "@/app/pages/courses/CourseList";
import Seperator from "@/app/components/Seperator";

export default function CoursesPage() {
  return (
    <main>
      <section
        className={clsx(" min-h-main mb-10 flex flex-col justify-center")}
      >
<div
          className="relative content-container z-10 text-lg md:text-xl flex items-center justify-center"
          style={{ position: "relative", width: "100%" }}
        >
          <img
            src="/images/bb.png"
            alt="Hero Image"
            className="w-full h-66 object-cover col-span-2"
            style={{
              width: "100vw",
              objectFit: "cover",
            }}
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
              zIndex: 1,
            }}
          ></div>

          {/* Blue Overlay: Half on the image, half overlapping page content */}
          <div
            className="absolute left-0"
            style={{
              bottom: "0", // Align to the bottom of the image
              width: "70vw",
              height: "20%", // Limit to half the height of the image
              backgroundColor: "rgba(179, 151, 125, 1)", // Beige color
              zIndex: 2, // Above the image and gradient
              clipPath: "polygon(0 0, calc(100% - 350px) 0, 100% 350px, 100% 100%, 0 100%)",

            }}
          >
            <div
              style={{
                position: "absolute",
                top: "60%", // Center vertically in the beige overlay
                left: "26%", // Center horizontally in the beige overlay
                transform: "translate(-50%, -50%)", // Center the text
                color: "#ffffff", // White text color
                fontSize: "2rem", // Adjust size as needed
                fontWeight: "bold", // Make text bold
                zIndex: 3, // Ensure text is above the beige overlay
              }}
            >
              <h1
                id="moon-education"
                style={{ color: "#01162d" }}
                className="text-black md:text-4xl md:leading-snug mb-8"
                data-fade="2"
              >
                Our Coursers
              </h1>{" "}
            </div>
          </div>
        </div>
        <section className=" relative">
          <div className="layout lg:mt-20 sm:mt-10 flex min-h-screen flex-col py-1">
            <h1
              id="moon-education"
              style={{ color: "#01162d" }}
              className="text-black md:text-4xl md:leading-snug mb-8"
              data-fade="2"
            >
              Our Courses
            </h1>
            <div></div>
            <div
              className="text-base text-neutral-800 md:text-m sm:mx-10 lg:mx-0"
              style={{ lineHeight: "2", letterSpacing: "0px" }}
            >
              <p className="mb-2 text-justify">
                We are a passionate team of educators and experts dedicated to
                guiding individuals on their journey to financial success.
                Committed to democratizing knowledge, we provide accessible
                resources and training, ensuring that everyone has the
                opportunity to harness the power of new technologies and
                industries to build wealth and achieve their dreams. Dedicated
                to democratizing knowledge, we empower financial success through
                accessible resources and practical guidance.
              </p>
            </div>

            <div className="mt-40">
              <CourseList />
            </div>
            <Seperator />
          </div>
        </section>
      </section>
    </main>
  );
}
