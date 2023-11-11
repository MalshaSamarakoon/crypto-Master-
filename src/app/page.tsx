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

export default function HomePage() {
  const isLoaded = useLoaded();

  return (
    <main>
      <Header />
      <section
        className={clsx(
          " min-h-main -mt-20 flex flex-col justify-center ",
          isLoaded && "fade-in-start"
        )}
      >
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500  z-10" style={{ borderRadius: "16px", width: "80%", height: "40%", opacity:0.8}}></div>  */}
        <div className="fixed top-0 left-0 w-full h-full">
          <img
            src="/images/test.png"
            alt="Your Alt Text"
            className="w-screen h-screen "
          />
        </div>

        <section className=" relative ">
          <div className=" layout content-container w-screen h-screen">
            
          <h1
              className="  text-neutral-100 md:mt-60 md:text-7xl md:leading-snug"
              data-fade="2"
            >
              Turning Knowledge into Wealth.. <br /> Your Success.. <br /> Our
              Expertise!
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

            <ButtonLink
              className="hover:bg-dark border border-amber-400 bg-amber-400 py-2 text-center text-white focus:outline-none mt-20"
              href="https://github.com/theodorusclarence/ts-nextjs-tailwind-starter/blob/main/src/styles/colors.css"
            >
              <p
                className={clsx(
                  "max-w-4xl text-left px-10 ",
                  "md:text-2xl 2x1:text-2xl"
                )}
                data-fade="3"
              >
                Check for Courses
              </p>
            </ButtonLink>
          </div>

          <div className="  content-container bg-dark mt-40">
            <InView triggerOnce rootMargin="-40% 0px ">
              {({ ref, inView }) => (
                <section
                  ref={ref}
                  id="intro"
                  className={clsx(
                    "mt-[-70px] py-10",
                    inView && "fade-in-start"
                  )}
                >
                  <article
                    className={clsx(
                      "layout flex flex-col-reverse items-center md:flex-row md:justify-start",
                      "md:gap-4"
                    )}
                    data-fade="0"
                  >
                    <div className="mt-8 mt-[-100px] h-full w-full py-40 md:mt-0">
                      <h2 className="text-4xl md:text-6xl">
                        <Accent className="inline decoration-clone leading-snug dark:leading-none">
                          Elevate Your Journey with Our Range of Services{" "}
                        </Accent>
                      </h2>
                      <div
                        className="mt-10 text-base text-neutral-300 md:text-xl"
                        style={{ lineHeight: "2", letterSpacing: "0.9px" }}
                      >
                        At <span>Moon Education Center </span> our team of
                        dedicated educators and experts is here to guide you on
                        your path to financial success. We are committed to
                        making knowledge accessible to all, offering a wide
                        range of resources and training to help you harness the
                        potential of new technologies and industries. Explore
                        our services to unlock opportunities and turn your
                        dreams into reality.
                      </div>
                    </div>
                    <div className="h-full w-full">
                      <ul className="relative h-full">
                        <SlideShow />
                      </ul>
                    </div>
                  </article>

                  <article
                    className={clsx(
                      "layout flex flex-col-reverse items-center md:flex-row md:justify-start",
                      "md:gap-4"
                    )}
                    data-fade="0"
                  >
                    <div className="h-full w-full">
                      <ul className="relative h-full">
                        <img
                          src="/images/service4.svg"
                          alt="Your Alt Text"
                          className="w-full h-auto sticky top-0 z-10"
                        />
                      </ul>
                    </div>
                    <div className="mt-8 h-full w-full md:mt-0">
                      <h2 className="text-4xl md:text-6xl">
                        <Accent className="inline decoration-clone leading-snug dark:leading-none">
                          Discover Our Resources and Expertise
                        </Accent>
                      </h2>
                      <div
                        className="mt-10 text-base text-neutral-300 md:text-xl"
                        style={{ lineHeight: "2", letterSpacing: "0.9px" }}
                      >
                        At <span>Moon Education Center </span>we take pride in
                        what we have to offer. Our arsenal comprises a wealth of
                        valuable resources and a team of seasoned experts who
                        are dedicated to your success. We've curated a
                        comprehensive collection of tools, knowledge, and
                        support to empower you in navigating the ever-evolving
                        landscape of opportunities. Delve into what we have to
                        offer and turn your aspirations into achievements.
                      </div>
                    </div>
                  </article>
                </section>
              )}
            </InView>
            <Footer />
          </div>
        </section>
      </section>
    </main>
  );
}
