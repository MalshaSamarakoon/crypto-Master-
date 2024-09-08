import * as React from "react";

export default function Praise() {
  return (
    <section className="relative">
      <div
        style={{ backgroundColor: "#000000" }}
        className="flex items-center justify-center md:py-2 sm:py-1 border-y border-neutral-500 text-neutral-400"
      >
        <div className="flex w-full">
          <div className="w-1/3 px-2">
            <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center border-r border-neutral-500">
              <h2 className="text-xs md:text-3xl mr-2">24/7</h2>
              <h5 className="text-xs md:text-lg ">Service</h5>
              </div>
          </div>
          <div className="w-1/3 md:px-2">
            <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center border-r border-neutral-500">
              <h2 className="text-xs md:text-3xl mr-2">20+</h2>
              <h5 className="text-xs md:text-lg"> Lecturers</h5>
            </div>
          </div>
          <div className="w-1/3 px-2">
            <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center">
              <h2 className="text-xs md:text-3xl mr-2">1000+</h2>
              <h5 className="text-xs md:text-lg">Students</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
