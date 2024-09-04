import React from "react";

const getteams = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/teams`, {
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
  const { teams } = (await getteams()) || {};

  return (
    <>
      {teams.map((m: any) => (
        <div key={m._id} className="w-[250px] max-w-full text-center flex flex-col items-center  pt-8 pb-8">
          <div className="bg-bg-dark border-[2px] border-[#d9b157] shadow-xl text-[#002147] relative w-full p-4">
            <div className="relative w-full h-[250px] mb-4 overflow-hidden flex items-center justify-center">
              <img
                className="w-full h-full object-cover"
                src={m.image}
                alt={m.name}
              />
            </div>

            <h6 className="mt-1 mb-1 uppercase p-1 text-[#002147]">{m.title}</h6>
            <h4 className="mt-2 mb-0 text-[#002147]">
              {m.name}
            </h4>
            <p className="text-sm leading-[21px] p-4">{m.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
