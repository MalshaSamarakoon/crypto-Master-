"use client";
import Head from "next/head";
import * as React from "react";
import IT from "./ServiceDetails/IT/page";
import Cryptocurrency from "./ServiceDetails/Cryptocurrency/page";
import Forex from "./ServiceDetails/Forex/page";
import Academic from "./ServiceDetails/Academic/page";

export default function ServicesPage() {
  const services = [
    { name: "Cryptocurrency", component: <Cryptocurrency /> },
    { name: "Forex Trading", component: <Forex /> },
    { name: "Information Technology", component: <IT /> },
    { name: "Academic", component: <Academic /> },
  ];

  const [selectedService, setSelectedService] = React.useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>

      <section className=" relative">
        <div className="lg:mt-20 sm:mt-10 flex min-h-screen flex-col py-1">
          <div className="layout">
            <h1
              className="text-white md:text-5xl md:leading-snug"
              data-fade="2"
            >
              Our Services
            </h1>
          </div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-40 lg:mt-20 sm:mt-2 sm:px-6 lg:px-20">
            <div className="lg:col-span-1 sm:col-span-1">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="cursor-pointer sm:h-20 lg:h-20 lg:text-2xl sm:text-xl sm:mx-10 lg:mx-0"
                  style={{
                    textDecoration:
                      selectedService === service ? "underline" : "none",
                    transition: "color 0.3s, text-decoration 0.3s",
                  }}
                  onClick={() => handleServiceClick(service)}
                >
                  <div
                    className={`bg-neutral-900 py-8 my-6 pl-10 text-amber-400`}
                  >
                    {service.name}
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2 sm:col-span-1 lg:mt-4 sm:-mt-20 sm:mb-20 text-neutral-300">
              {selectedService ? (
                selectedService.component
              ) : (
                <>
                  <p className="my-4 max-w-4xl text-left text-white md:text-lg 2xl:text-xl">
                    At Moon Education Center our team of dedicated educators and
                    experts is here to guide you on your way to success. We are
                    committed to making knowledge accessible to all, offering a
                    wide range of resources and training to help you harness the
                    potential of new technologies and industries.
                  </p>
                  <br />
                  <p className="my-4 max-w-4xl text-left text-white md:text-lg 2xl:text-xl">
                    Embark on a transformative learning journey with Moon
                    Education Center's diverse range of services. Our commitment
                    extends beyond imparting knowledge; we foster an inclusive
                    and dynamic learning environment where you can engage with
                    cutting-edge concepts, connect with industry experts, and
                    cultivate the skills needed to thrive in today's rapidly
                    evolving landscape. Join us in shaping a future where
                    education paves the way to unparalleled financial success
                    and personal growth.
                  </p>
                  <br />

                  <p className="my-4 max-w-4xl text-left text-white md:text-lg 2xl:text-xl">
                    You can now explore our services to turn your dreams into
                    reality.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
