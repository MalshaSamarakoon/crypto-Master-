import Accent from "./Accent";
import clsx from "clsx";

export default function ChooseLanding() {
  const services = [
    {
      name: "Modern Learning Technologies",
      desc: "We let you make the difference. Our goal is to inspire you with new insights and creative solutions.",
      icon: "/images/clipboard-list-check.svg",
    },
    {
      name: "Luxurious Environment",
      desc: "We let you make the difference. Our goal is to inspire you with new insights and creative solutions.",
      icon: "/images/store-alt.svg",
    },
    {
      name: "Online / Physical  ",
      desc: "We let you make the difference. Our goal is to inspire you with new insights and creative solutions.",
      icon: "/images/badge-check.svg",
    },
    {
      name: "Online / Physical  ",
      desc: "We let you make the difference. Our goal is to inspire you with new insights and creative solutions.",
      icon: "/images/badge-check.svg",
    },
  ];

  const servicesInRows = chunkArray(services, 4);

  function chunkArray(array: any, chunkSize: any) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }

  return (
    <section className="relative">
      <div className="h-full w-full layout items-center px-0">
        <div className=" mt-0">
          {servicesInRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className=" grid grid-cols-4 sm:grid-cols-1 md:grid-cols-4 flex justify-between lg:p-10 sm:p-0"
            >
              {row.map((service: any, index: any) => (
                <div
                  key={index}
                  className="flex flex-col items-center box-container relative "
                >
                  {service.icon && (
                    <img
                      src={service.icon}
                      className="icon lg:w-20 lg:h-20 lg:mb-10 sm:w-10 sm:h-10 sm:mb-6"
                    />
                  )}

                  <div
                    className="text-base md:text-xl text-center"
                    style={{
                      color: "#8d6e1b",
                      lineHeight: "2",
                      letterSpacing: "0.9px",
                    }}
                  >
                    {service.name}
                  </div>

                  <div className="text-base text-neutral-400 md:text-sm text-center lg:mb-10 sm:mb-10">
                    {service.desc}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>{" "}
      </div>
    </section>
  );
}
