"use client";
import clsx from "clsx";
import * as React from "react";
import useLoaded from "@/hooks/useLoaded";
import SlideShow from "./components/SlideShow";
import Accent from "@/app/components/Accent";
import ButtonLink from "@/components/links/ButtonLink";
import { InView } from "react-intersection-observer";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Praise from "./components/PraiseLanding";
import ServicesLanding from "./components/ServicesLanding";
import ChooseLanding from "./components/ChooseLanding";
import FeedbacksLanding from "./components/FeedbacksLanding";
import Seperator from "./components/Seperator";
import LatestLanding from "./components/LatestLanding";
import YoutubeVideo from "./components/YoutubeVideo";
import Carousel from "./components/Carousel";

export default function HomePage() {
  const [scrollBg, setScrollBg] = React.useState(false);

  const handleScroll = () => {
    setScrollBg(window.scrollY > window.innerHeight);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <Header />
      <section className="relative">
      <div
  className="relative content-container z-10 text-lg md:text-xl flex items-center justify-center"
  style={{ position: "relative", width: "100%" }}
>
  <Carousel />

  <div className="absolute inset-0 grid grid-cols-2 ">
    {/* Left side with black fading background */}
    <div
      className="flex flex-col items-center justify-center md:pl-10  text-center z-20 relative"
      style={{
        background: "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
        height: "100%",
        width: "100%",
      }}
    >
      <h1
        className="text-2xl sm:text-sm md:text-6xl  uppercase mb-2"
        style={{
          color: "#ffffff", // Change text color to white for better visibility
          lineHeight: "1.5",
          fontWeight: 500,
        }}
      >
        Empowering Minds
      </h1>
      <h1
        className="text-2xl sm:text-sm md:text-6xl uppercase mb-2"
        style={{
          color: "#ffffff", // Change text color to white for better visibility
          lineHeight: "1.3",
          fontWeight: 100,
        }}
      >
      for a Brighter Future
      </h1>

      <h6
        className="hidden lg:block text-2xs sm:text-2xs md:text-xl mb-8"
        style={{ color: "#ffffff",fontWeight: 100 }} // Change text color to white
      >
        We empower individuals with knowledge and tech solutions to navigate tomorrow&#39;s world.
      </h6>

      <div className="flex justify-center space-x-4">
        <ButtonLink
          href="/pages/courses"
          className="btn-primary hover:bg-[#8d6e1b] transition duration-300"
          style={{ backgroundColor: "#a67d21", border: "none" }}
        >
          Go to Courses
        </ButtonLink>
      </div>
    </div>

    {/* Right side (can be left empty or customized as needed) */}
    <div className="hidden md:block"></div>
  </div>
</div>

        <div className="-mt-2">
          <Praise />{" "}
        </div>

        <div className="relative content-container bg-dark z-10 flex flex-col items-center justify-center text-center">
          <section className="relative">
            <div className="h-full w-full layout items-center px-0 py-8 md:py-16">
              <div className="relative">
                <h1
                  className="text-xl md:text-3xl sm:mx-10 lg:mx-0 md:leading-relaxed tracking-wide"
                  style={{ color: "#01162d" }}
                >
                  Start Your Journey with Our
                  <br />
                  Range of Services
                </h1>
              </div>

              <div className="flex flex-col items-center justify-center mt-2 md:mt-10">
                <div
                  className="text-base text-neutral-800 text-sm md:text-m sm:mx-10 lg:mx-0"
                  style={{ lineHeight: "2", letterSpacing: "0px" }}
                >
                  At Moon Education Center, we lead in educational excellence
                  with our innovative and comprehensive approach. We offer
                  cutting-edge Vocational Training Programs and School
                  Curriculum Support Classes in a state-of-the-art computer lab
                  environment.
                </div>

                <a
                  href="/pages/about"
                  className="mt-4 md:mt-10 px-6 py-2 text-white bg-[#a67d21] hover:bg-[#8d6e1b] transition duration-300 inline-block border border-round-lg rounded-md"
                >
                  Read More &gt;
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="relative content-container bg-dark">
          <ServicesLanding />
        </div>
        <div className="relative content-container bg-dark">
          <Seperator />
        </div>
        {/* <div className="relative content-container bg-dark">
          <FeedbacksLanding />
        </div> */}
        <div className="relative content-container bg-dark sm:mx-10">
          <ChooseLanding />
        </div>
        <div
          className="relative content-container py-20"
          style={{ backgroundColor: "#a67d2150" }}
        >
          <LatestLanding />
        </div>
        <div className="relative content-container ">
          <Seperator />
        </div>
        <div className="relative content-container bg-dark ">
          <YoutubeVideo
            title="Your Video Title"
            url="https://www.youtube.com/watch?v=01wdaxpQuIg"
          />
        </div>
        <div className="a2a_kit a2a_kit_size_32 a2a_default_style fixed w-16 h-16 bottom-12 right-12  z-20 sm:w-12 sm:h-12 sm:bottom-8 sm:right-8 ">
              {/* WhatsApp chat button */}
              <a
                href="https://api.whatsapp.com/send?phone=94713426510"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/whatsapp.png" alt="WhatsApp Chat" />
              </a>
            </div>
        <div className="relative content-container bg-dark">
          <Footer />
        </div>
      </section>
    </main>
  );
}
