import React from "react";
import Button from "@/components/buttons/Button";
import Link from "next/link";

export default function IT() {
  return (
    <>
      <div className="lg:col-span-2 sm:col-span-1 text-neutral-300">
        <div className="">
          <h1 className="text-white lg:text-3xl">Course Series</h1>
        </div>
        <p className="text-white mt-10 mb-10">
          Join us on our educational venture and empower yourself with the
          expertise needed in the dynamic crypto landscape.. Our meticulously
          crafted programs offer a blend of insightful sessions and hands-on
          learning experiences.
        </p>
        <Link href={`/pages/courses`}>
          <Button
            className=" mb-20 left-4 border border-amber-400 text-amber-400 hover:bg-neutral-700 dark:hover:bg-neutral-700"
            variant="outline"
          >
            Go to Courses
          </Button>{" "}
        </Link>
        <div className="">
          <h1 className="text-white lg:text-3xl">Informative Sessions</h1>
        </div>{" "}
        <p className="text-white mt-10 mb-10">
          We share high-quality signals to help you navigate the dynamic forex
          market. Join our WhatsApp community to stay updated with the latest
          market trends, news, and insights to make informed trading decisions
          and get in touch with a supportive community.
        </p>

        <p className="text-white mt-10 mb-10">
         Stay tuned with Moon Education News and social media platforms to get know about upcomming sessions
        </p>
        
      </div>
    </>
  );
}
