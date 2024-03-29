import clsx from "clsx";
import Head from "next/head";
import * as React from "react";
import useLoaded from "@/hooks/useLoaded";
import CourseList from "@/app/pages/courses/CourseList";
import Seperator from "@/app/components/Seperator";

export default function CoursesPage() {

  return (
    <main>

<Head>
        <title>Moon Education | Cources</title>
      </Head>
      <section
        className={clsx(
          " min-h-main mb-10 flex flex-col justify-center sm:mx-10 lg:mx-0",
        )}
      >
        <section className=" relative">
          <div className="layout lg:mt-20 sm:mt-10 flex min-h-screen flex-col py-1">
            <h1
              className="text-white md:text-5xl md:leading-snug"
              data-fade="2"
            >
              Our Courses
            </h1>
            <div></div>
            <p
              className={clsx(
                "mt-4 max-w-4xl text-left text-neutral-400 md:mt-10",
                "md:text-lg 2xl:text-lg"
              )}
              data-fade="3"
            >
              We are a passionate team of educators and experts dedicated to
              guiding individuals on their journey to financial success.
              Committed to democratizing knowledge, we provide accessible
              resources and training, ensuring that everyone has the opportunity
              to harness the power of new technologies and industries to build
              wealth and achieve their dreams. Dedicated to democratizing
              knowledge, we empower financial success through accessible
              resources and practical guidance.
            </p>

            <div className="mt-20">
              <CourseList />
            </div>
            <Seperator />
          </div>
        </section>
      </section>
    </main>
  );
}
