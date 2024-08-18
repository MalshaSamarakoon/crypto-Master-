import React from "react";
import "./FeedbacksLanding.css";
import Image from "next/image";

export default function ServicesLanding() {
  return (
    <section className="relative mx-10 md:mx-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* First Column */}
        <div className="col-span-1">
          {/* Long grid */}
          <div className="h-96 mb-4 relative">
            <Image
              src="/images/grid2.JPG"
              alt="grid"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>

          {/* Small grid */}
          <div
            style={{ backgroundColor: "#1557a2" }}
            className="h-64 bg-gray-300 p-6 text-white"
          >
            <h2 className="text-xl font-bold mb-4">Educational Support Programs</h2>
            <p className="text-sm">
              Boost your academic performance with our Educational Support Programs, offering practical resources and guidance from highly qualified staff.
            </p>
          </div>
        </div>

        {/* Second Column */}
        <div className="col-span-1">
          {/* Small grid */}
          <div
            style={{ backgroundColor: "#773928" }}
            className="h-64 bg-gray-300 mb-4 p-6 text-white"
          >
            <h2 className="text-xl font-bold mb-4">Vocational Training Programs</h2>
            <p className="text-sm">
              Enhance your career prospects with our Vocational Training Programs, featuring state-of-the-art facilities and expert instructors.
            </p>
          </div>
          {/* Long grid */}
          <div className="h-96 relative">
            <Image
              src="/images/grid1.JPG"
              alt="grid"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>
        </div>

        {/* Third and Fourth Columns */}
        <div className="col-span-1 md:col-span-2 grid grid-rows-2">
          {/* Long grid */}
          <div className="row-span-2 h-96 mb-4 relative">
            <Image
              src="/images/grid3.JPG"
              alt="grid"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>
          {/* Additional grids */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              style={{ backgroundColor: "#15a295" }}
              className="h-64 bg-gray-300 p-6 text-white"
            >
              <h2 className="text-xl font-bold mb-4">School Curriculum Support Classes</h2>
              <p className="text-sm">
              Excel in your studies with our School Curriculum Support Classes, designed to complement your syllabus with advanced computer lab facilities and hands-on learning.
              </p>
            </div>
            <div
              style={{ backgroundColor: "#c76dad" }}
              className="h-64 bg-gray-300 p-6 text-white"
            >
              <h2 className="text-xl font-bold mb-4">Financial Aid and Training Programs</h2>
              <p className="text-sm">
              Explore our Financial Aid and Training Programs, combining financial support with top-notch training facilities and expert staff to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
