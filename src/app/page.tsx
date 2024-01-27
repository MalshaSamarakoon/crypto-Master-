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
    <main className="w-screen ">
      <Header />
      <section className="">
        <div className="fixed top-0 left-0 w-screen h-screen z-0">
          <img
            src="/images/test.png"
            alt="Your Alt Text"
            className="w-full h-full object-cover"
          />
        </div>

        <section className=" relative">
          <div className="flex justify-center w-screen h-screen md:mt-40 sm:mt-20 ">
            <div className="layout content-container sm:mx-10">
              <h1
                className="text-neutral-100 text-left md:text-7xl md:leading-snug "
                data-fade="2"
              >
                Turning Knowledge into Wealth.. <br /> Your Success.. <br /> Our
                Expertise !
              </h1>
              <p
                className={clsx(
                  "mt-4 max-w-4xl text-left text-neutral-400 md:mt-10",
                  "md:text-xl 2x1:text-2xl"
                )}
                data-fade="3"
              >
                Empowering individuals with knowledge and tech solutions to
                navigate tomorrow's world.
              </p>
            </div>
          </div>

          <div className=" relative content-container bg-dark z-20">
            <Praise />
          </div>

          <div className="relative content-container bg-dark z-10 ">
            <article
              className={clsx(
                "layout flex flex-col items-center md:flex-row md:justify-start",
                "md:gap-4 lg:pt-40 sm:pt-20 sm:pb-20 "
              )}
              data-fade="0"
            >
              <div className="relative h-full w-full ">
                <h2 className="text-4xl md:text-6xl sm:mx-10 lg:mx-0">
                  <Accent className="inline decoration-clone leading-snug dark:leading-none">
                    Elevate Your Journey with Our Range of Services{" "}
                  </Accent>
                </h2>
              </div>
              <div className="h-full w-full">
                <ul className="relative h-full">
                  <div
                    className="mt-10 text-base text-neutral-300 md:text-xl sm:mx-10 lg:mx-0"
                    style={{ lineHeight: "2", letterSpacing: "0.9px" }}
                  >
                    At <span>Moon Education Center </span> our team of dedicated
                    educators and experts is here to guide you on your path to
                    financial success. We are committed to making knowledge
                    accessible to all, offering a wide range of resources and
                    training to help you harness the potential of new
                    technologies and industries. Explore our services to turn
                    your dreams into reality.
                  </div>
                </ul>
              </div>
            </article>
          </div>

          <div className=" relative content-container bg-dark lg:pb-20 ">
            <ServicesLanding />
          </div>
          <div className=" relative content-container bg-dark ">
            <Seperator />
          </div>
          <div className=" relative content-container bg-dark lg:pb-20 sm:pb-20">
            <ChooseLanding />
          </div>
          <div className=" relative content-container bg-dark ">
            <LatestLanding />
          </div>
          <div className=" relative content-container bg-dark ">
            <Seperator />
          </div>
          <div className=" relative content-container bg-dark ">
            <FeedbacksLanding />
          </div>
          <div className=" relative content-container bg-dark ">
            <Seperator />
          </div>

          <div className=" relative content-container bg-dark">
            <Footer />
          </div>
        </section>
      </section>
    </main>
  );
}
