"use client";
import Head from "next/head";
import * as React from "react";

export default function ServicesPage() {

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
            src="/images/cc.png"
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
                 Our Services
              </h1>{" "}
            </div>
          </div>
        </div>
        <div className="lg:mt-20 sm:mt-10 min-h-screen py-1">
          <div className="layout">
                     <h1
  id="moon-education"
  style={{ color: "#01162d" }}
  className="block md:hidden text-black md:text-4xl md:leading-snug mb-8"
  data-fade="2"
>
  Our Services
</h1>

            <h6
              id="advices"
              className="text-base text-[#002147] text-lg mb-6 font-bold mt-10"
            >
              Counseling
            </h6>
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
