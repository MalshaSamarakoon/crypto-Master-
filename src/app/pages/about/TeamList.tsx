import React from "react";
import TeamCard from "@/app/components/TeamCard";

export default function TeamList() {
  return (
    <div className="w-full space-y-32">
      <h2
        className="text-white text-center font-medium md:mt-20 md:text-5xl md:leading-snug"
        data-fade="1"
      >
        Meet the Teachers
      </h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <TeamCard />
        </div>
      </div>
    </div>
  );
}
