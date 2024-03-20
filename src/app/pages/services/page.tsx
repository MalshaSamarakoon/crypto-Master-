"use client";
import Head from "next/head";
import * as React from "react";
import IT from "./ServiceDetails/IT/page";
import Cryptocurrency from "./ServiceDetails/Cryptocurrency/page";
import Forex from "./ServiceDetails/Forex/page";
import Academic from "./ServiceDetails/Academic/page";

export default function ServicesPage() {
  const services = [
    { name: "Crypto", component: <Cryptocurrency /> },
    { name: "Forex", component: <Forex /> },
    { name: "ICT", component: <IT /> },
    { name: "Other", component: <Academic /> },
  ];

  interface Service {
    name: string;
    component: React.ReactNode;
  }

  const [selectedService, setSelectedService] = React.useState<Service | null>(
    null
  );

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
  };

  return (
    <main>
      <Head>
        <title>Moon Education | Services</title>
      </Head>

      <section className=" relative">
        <div className="lg:mt-20 sm:mt-10 flex min-h-screen flex-col py-1  sm:mx-10 lg:mx-0">
          <div className="layout">
            <h1
              className="text-white md:text-5xl md:leading-snug"
              data-fade="2"
            >
              Our Services
            </h1>


          <div className="grid sm:grid-cols-4 lg:gap-10 sm:mt-2  mb-20 lg:mt-10 sm:mt-0">
            {services.map((service, index) => (
              <div
                key={index}
                className="cursor-pointer sm:h-10 lg:h-20 lg:text-2xl sm:text-sm my-20 sm:my-8 "
                style={{
                  textDecoration:
                    selectedService === service ? "underline" : "none",
                  transition: "color 0.3s, text-decoration 0.3s",
                }}
                onClick={() => handleServiceClick(service)}
              >
                <div
                  className={`bg-neutral-900 lg:py-8 sm:py-4 lg:my-6  text-amber-400 flex justify-center `}
                >
                  {service.name}
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2 sm:col-span-1 lg:mt-4 sm:-mt-20 sm:mb-20 text-neutral-300 ">
            {selectedService ? (
              selectedService.component
            ) : (
              <>
                <p className="my-4 max-w-4xl text-left text-neutral-400 md:text-lg 2xl:text-lg">
                  At Moon Education Center our team of dedicated educators and
                  experts is here to guide you on your way to success. We are
                  committed to making knowledge accessible to all, offering a
                  wide range of resources and training to help you harness the
                  potential of new technologies and industries.
                </p>

                <br />
                <p className="my-4 max-w-4xl text-left text-neutral-400 md:text-lg 2xl:text-lg">
                  Embark on a transformative learning journey with Moon
                  Education Center&apos;s diverse range of services. Our
                  commitment extends beyond imparting knowledge; we foster an
                  inclusive and dynamic learning environment where you can
                  engage with cutting-edge concepts, connect with industry
                  experts, and cultivate the skills needed to thrive in
                  today&apos;s rapidly evolving landscape. Join us in shaping
                  a future where education paves the way to unparalleled
                  financial success and personal growth.
                </p>

                <br />

                <p className="my-4 max-w-4xl text-left text-neutral-400 md:text-lg 2xl:text-lg">
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
