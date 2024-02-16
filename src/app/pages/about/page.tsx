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
        <div className="lg:mt-20 sm:mt-10 flex min-h-screen flex-col py-1 sm:mx-10 lg:mx-0">
          <div
            className="relative content-container z-10 text-lg md:text-xl">
            <div/> 
           <div className="layout ">
              <h1
                className="text-white md:text-5xl md:leading-snug"
                data-fade="2"
              >
                Who we are ?
              </h1>
              <p
                className={clsx(
                  "my-4 max-w-4xl text-left text-neutral-400 md:my-10",
                  "md:text-lg sm:text-sm 2xl:text-xl"
                )}
                data-fade="3"
              >
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
          </div>
          <div className="layout">
            <div className="mt-20">
              <Vision />
            </div>
            <div className="mt-20">
              <Mission />
            </div>
            <Seperator />

            <TeamList />
            <Seperator />
          </div>
        </div>
      </section>
    </main>
  );
}
