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
            src="/images/hero.jpg"
            alt="Hero Image"
            className="w-full h-full object-cover col-span-2"
          />
        </div>
        <div className="lg:mt-20 sm:mt-10 min-h-screen py-1">
          <div className="layout">
            <h1
              style={{ color: "#01162d" }}
              className="text-black md:text-4xl md:leading-snug mb-8"
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
