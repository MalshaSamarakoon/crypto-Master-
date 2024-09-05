import clsx from "clsx";
import * as React from "react";
import useLoaded from "@/hooks/useLoaded";
import Vision from "@/app/pages/about/vision";
import Mission from "@/app/pages/about/mission";
import TeamList from "@/app/pages/about/TeamList";
import Seperator from "@/app/components/Seperator";

export default function AboutPage() {
  return (
    <main>
      <section className=" relative">
        <div
          className="relative content-container z-10 text-lg md:text-xl flex items-center justify-center"
          style={{ position: "relative", width: "100%" }}
        >
          <img
            src="/images/aa.png"
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
              height: "25%", // Limit to half the height of the image
              backgroundColor: "rgba(179, 151, 125, 1)", // Beige color
              zIndex: 2, // Above the image and gradient
              clipPath: "polygon(0 0, calc(100% - 350px) 0, 100% 350px, 100% 100%, 0 100%)",

            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%", // Center vertically in the beige overlay
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
                Moon Education Center{" "}
              </h1>{" "}
            </div>
          </div>
        </div>

        <div className="lg:mt-20 sm:mt-10 flex min-h-screen flex-col py-1">
          <div className="relative content-container z-10 text-lg md:text-xl">
            <div className="layout">
              <div
                className="text-base text-neutral-800 md:text-m sm:mx-10 lg:mx-0"
                style={{ lineHeight: "2", letterSpacing: "0px" }}
              >
                <p className="mb-2 text-justify">
                  Moon Education Center stands at the forefront of educational
                  excellence, driven by a commitment to innovation and
                  comprehensive support. Our mission is to empower individuals
                  with the knowledge and skills necessary to thrive in today’s
                  rapidly changing world.
                </p>

                <p className="mb-2 text-justify">
                  We offer a diverse range of programs tailored to meet the
                  unique needs of our students. Our Vocational Training Programs
                  are designed to provide practical, career-oriented skills,
                  while our School Curriculum Support Classes help students
                  achieve academic excellence. Recognizing the importance of
                  holistic development, Moon Education Center also offers a
                  range of support services. These include professional
                  counseling to assist students in navigating their educational
                  journeys and business advisory services to prepare them for
                  success in the competitive job market.
                </p>

                <div className="mt-10 bg-gray-100 p-6">
                  <Vision />
                </div>
                <div className="mt-20 bg-gray-100 p-6">
                  <Mission />
                </div>

                <h6 className="text-base text-[#002147] text-lg my-6 font-bold mt-20">
                  Academic Experience
                </h6>
                <p className="mb-2 text-justify">
                  To enhance the academic experience and create a comfortable,
                  study-friendly environment, we uphold a high standard of
                  responsibility and discipline. Our dedicated team of educators
                  is passionate about fostering student success, employing
                  innovative teaching methods, and emphasizing hands-on learning
                  to help every student reach their full potential.
                </p>
                <h6 className="text-base text-[#002147] text-lg my-6 font-bold">
                  Our Facilities
                </h6>
                <p className="mb-2 text-justify">
                  Our facilities reflect our dedication to providing a superior
                  educational experience. We feature modern halls equipped with
                  the latest smart board technology, fostering an interactive
                  and engaging learning environment. Additionally, our
                  state-of-the-art computer labs are designed to accommodate
                  both in-person and online learning, ensuring that students
                  have access to the most up-to-date tools and resources.
                </p>
              </div>
            </div>
          </div>
          <div id="team-list" className="layout">
            <TeamList />
            <Seperator />
          </div>
        </div>
      </section>
    </main>
  );
}
