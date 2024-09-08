"use client";
import Head from "next/head";
import * as React from "react";

export default function TeachingSpace() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>

      <section className=" relative">
      <div
          className="relative content-container z-10 text-lg md:text-xl flex items-center justify-center"
          style={{ position: "relative", width: "100%" }}
        >
          <img
            src="/images/dd.png"
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
                 Teaching Space
              </h1>{" "}
            </div>
          </div>
        </div>

        <div className="lg:mt-20 sm:mt-10 min-h-screen py-1">
          <div className="layout">
            <div
              className="text-base text-neutral-800 md:text-m sm:mx-10 lg:mx-0"
              style={{ lineHeight: "2", letterSpacing: "0px" }}
            >
              <p className="mb-2 text-justify">
                At Moon Education Center, we offer state-of-the-art facilities
                designed to enhance the teaching and learning experience. Our
                comfortable, air-conditioned classrooms, equipped with the
                latest Smart Board technology, provide an ideal environment for
                conducting classes and training sessions. Conveniently located
                near the Kurunegala bus station, our institute ensures easy
                accessibility for both instructors and students. By choosing us,
                you also benefit from our experienced non-academic staff and
                complimentary promotion of your courses through our social media
                channels. Elevate your teaching experience with us.
              </p>
            </div>

            <h6
  id="advices"
  className="text-right text-lg mb-6 font-bold mt-10 bg-gradient-to-l from-[#a67d21] to-transparent text-white p-2  md:ml-80"
>
  Physical Classes/ Courses
</h6>


            <div
              className="text-base text-neutral-800 md:text-m sm:mx-10 lg:mx-0"
              style={{ lineHeight: "2", letterSpacing: "0px" }}
            >
              <p className="mb-2 text-justify">
                Our state-of-the-art facilities are designed to enhance the
                learning experience. With access to Smart Boards, projectors,
                and fully-equipped computer laboratories, your students will
                benefit from a modern and interactive educational environment.
              </p>
            </div>

            <h6
              id="advices"
              className="text-right text-lg mb-6 font-bold mt-10 bg-gradient-to-l from-[#a67d21] to-transparent text-white p-2  md:ml-80"
              >
              One-day workshops / Exams / Seminars
            </h6>
            <div
              className="text-base text-neutral-800 md:text-m sm:mx-10 lg:mx-0"
              style={{ lineHeight: "2", letterSpacing: "0px" }}
            >
              <p className="mb-2 text-justify">
                COnduct your short-term events with our advanced facilities. For
                workshops, exams, or seminars, we provide access to Smart
                Boards, projectors, and fully-equipped computer labs to support
                a professional environment.
              </p>
            </div>

            <h6
              id="advices"
              className="text-right text-lg mb-6 font-bold mt-10 bg-gradient-to-l from-[#a67d21] to-transparent text-white p-2  md:ml-80"
              >
              Online Teaching Activities
            </h6>
            <div
              className="text-base text-neutral-800 md:text-m sm:mx-10 lg:mx-0"
              style={{ lineHeight: "2", letterSpacing: "0px" }}
            >
              <p className="mb-2 text-justify">
                Leverage our digital resources to deliver top-notch online
                education. Utilize Smart Boards, projectors, and our Zoom Pro
                Account for live sessions, with recordings available for
                post-lecture review, ensuring your virtual classes are as
                effective as in-person ones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
