import React from "react";

const getteams = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/teams", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch teams");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading teams: ", error);
  }
};

export default async function TeamCard() {
  const { teams } = await getteams() || {};

  return (
    <>
      {teams.map((m: any) => (
        <div
          key={m._id}  
        >
          <div className="bg-bg-dark rounded-[15px] shadow-xl border-[2px] border-[#d9b157] text-[#E7F1FB] relative w-[250px] max-w-full text-center flex flex-col items-center pt-8 pb-8">
            <div className="-mt-20">
              <img
                className="border-[2px] border-[#d9b157] rounded-full w-[100px] h-[100px] object-cover p-1"
                src="/images/udara_rajapaksha.jpg"
                alt="Udara Rajapaksha"
              />
            </div>
            <h4 className="mt-5 mb-5 text-[#E7F1FB] relative w-[250px] ">
              {m.name}
            </h4>
            <h3 className="mt-1 mb-1 uppercase p-1 text-gold ">{m.title}</h3>
            <p className="text-sm leading-[21px] p-4">{m.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}