"use client";

import React from "react";
import ButtonLink from "@/components/links/ButtonLink";

interface YoutubeVideoProps {
  title?: string;
  url: string;
}

export default function YoutubeVideo(props: YoutubeVideoProps) {
  const { title, url } = props;
  const videoHash = extractVideoHashFromUrl(url);

  return (
    <section className="relative">
      <div className="flex flex-col md:flex-row layout items-center h-full w-full px-0 pb-20">
        {/* Video Container */}
        <div className="flex-1 p-4">
          <div className="flex relative overflow-hidden h-full">
            <iframe
              width="500"
              height="282"
              src={`https://www.youtube.com/embed/${videoHash}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>
        </div>
        {/* Button Container */}
        <div className="flex-1 p-4 flex flex-col items-center justify-center">
  <div className="text-center md:text-left mb-6">
    <h3 style={{ color: "#01162d" }} className="text-2xl font-bold mb-8">
      Looking for a Teaching Space?
    </h3>
    <p className="text-base text-sm md:text-md">
      Moon Education Center offers state-of-the-art facilities for your
      classes, lectures, and workshops. Our halls are equipped with modern
      amenities, including smart boards, advanced computer labs, and online
      learning capabilities. Experience a dynamic teaching environment
      designed to enhance both teaching and learning.
    </p>
  </div>
  <ButtonLink
    href="/pages/services/teachingspace"
    className="btn-secondary hover:bg-[#8d6e1b] transition duration-300 mt-10"
    style={{ backgroundColor: "#a67d21", border: "none" }}
  >
    Reserve a Teaching Space
  </ButtonLink>
</div>

      </div>
    </section>
  );
}

function extractVideoHashFromUrl(url: string) {
  const videoHashQueryParamKey = "v";
  const searchParams = new URL(url).search;
  return new URLSearchParams(searchParams).get(videoHashQueryParamKey);
}
