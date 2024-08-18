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
          className="relative content-container py-20 z-10 text-lg md:text-xl flex items-left justify-left pl-20 bg-[#002147]"
          style={{ position: "relative", width: "100%" }}
        >
          <h1
            // style={{ color: "#01162d" }}
            className="text-neutral-100 md:text-4xl md:leading-snug mb-8"
            data-fade="2"
          >
            Reserve A Teaching Space
          </h1>
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
              className="text-right text-base text-[#002147] text-lg mb-6 font-bold mt-10"
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
              className="text-right text-base text-[#002147] text-lg mb-6 font-bold mt-10"
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
              className="text-right text-base text-[#002147] text-lg mb-6 font-bold mt-10"
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
