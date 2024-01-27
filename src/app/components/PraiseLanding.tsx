import * as React from "react";

export default function Praise() {
  return (
    <section className="relative">
      <div className="flex items-center justify-center w-4/5 absolute left-1/2 transform -translate-x-1/2 -translate-y-full -mt-20 lg:mt-0 lg:-translate-y-1/2">
        <div className="flex flex-wrap w-full">
          <div className="w-full lg:w-1/4 mb-4 px-2">
            <div className="flex-1 border-dashed border-2 border-teal-500 bg-neutral-800 p-6 text-teal-500 text-center hover:shake md:mr-8 sm:mr-0 rounded-xl">
              <h2 className="text-4xl md:text-5xl ">24/7 </h2>{" "}
              <h5 className="text-xl lg:pt-6 ">Service </h5>
            </div>
          </div>
          <div className="w-full lg:w-1/4 mb-4 px-2">
            <div className="flex-1 border-dashed border-2 border-teal-500 bg-neutral-800  p-6 text-teal-500 text-center hover:shake md:mr-8 sm:mr-0 rounded-xl">
              <h2 className="text-4xl md:text-5xl "> 20+ </h2>{" "}
              <h5 className="text-xl lg:pt-6 ">Qualified Lecturers </h5>
            </div>
          </div>
          <div className="w-full lg:w-1/4 mb-4 px-2">
            <div className="flex-1 border-dashed border-2 border-teal-500 bg-neutral-800  p-6 text-teal-500 text-center hover:shake  md:mr-8 sm:mr-0 rounded-xl">
              <h2 className="text-4xl md:text-5xl "> 3+ </h2>{" "}
              <h5 className="text-xl lg:pt-6 ">Years Experience </h5>
            </div>
          </div>
          <div className="w-full lg:w-1/4 mb-4 px-2">
            <div className="flex-1 border-dashed border-2 border-teal-500 bg-neutral-800  p-6 text-teal-500 text-center hover:shake md:mr-8 sm:mr-0 rounded-xl">
              <h2 className="text-4xl md:text-5xl "> 1000+ </h2>{" "}
              <h5 className="text-xl lg:pt-6 ">Students </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
