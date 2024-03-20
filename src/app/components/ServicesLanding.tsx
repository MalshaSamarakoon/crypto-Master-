// ServicesLanding.tsx
import React from "react";
import "./FeedbacksLanding.css";

export default function ServicesLanding() {
  const services = [
    { name: "Forex" },
    { name: "Cryptocurrency" },
    { name: "ICT" },
    { name: "Academic" },
  ];

  return (
    <section className="relative">
      <div
        className="relative content-container z-10 text-lg md:text-xl"
        style={{
          backgroundImage: "url('/images/service3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "60%",
            background: "linear-gradient(to bottom, #222222, rgba(0,0,0,0))",
          }}
        />

        <div className="lg:h-60 sm:h-40"></div>
        <div className="lg:h-80 sm:h-40"></div>

        <div className="flex items-center justify-center w-4/5 absolute left-1/2 transform -translate-x-1/2 -translate-y-full  lg:mt-0 lg:-translate-y-3/4">
          <div className="flex-1 bg-dark relative sm:opacity-70 lg:opacity-100">
            {/* <div className="border-dashed border-2 border-teal-500 border-top"></div> */}
            <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-4 lg:gap-20 ">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center box-container relative sm:h-20 lg:h-40 text-teal-500"
                >
                  <p style={{ color: "#39FFFF" }}>{service.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
