import React from "react";
import Button from "@/components/buttons/Button";
import Link from "next/link";

export default function Cryptocurrency() {
  return (
    <>
      <div className="lg:col-span-2 sm:col-span-1 text-neutral-300">
        <div className="">
          <h1 className="text-white lg:text-3xl">Moon Coin Subscription</h1>
        </div>{" "}
        
        <p className="text-white mt-10 mb-10">
          We share high-quality signals to help you navigate the dynamic
          cryptocurrency market. Join our WhatsApp community to stay updated
          with the latest market trends, news, and insights to make informed
          trading decisions and get in touch with a supportive community.
        </p>
        <Link href="/pages/services/ServiceDetails/Cryptocurrency/Details">
          <Button
            className=" mb-20 left-4 border border-amber-400 text-amber-400 hover:bg-neutral-700 dark:hover:bg-neutral-700"
            variant="outline"
          >
            More Details
          </Button>
        </Link>
        <div className="">
          <h1 className="text-white lg:text-3xl">Free Signal Groups</h1>
        </div>
        <p className="text-white mt-10 mb-10">
          You can join our WhataApp Signal Group and recieve FREE signals to
          embark on your crypto trading journey.
        </p>
        <Link href={`https://chat.whatsapp.com/FXpydRuMH3H1AVbOpW3ZoA`}>
          <Button
            className=" mb-20 left-4 border border-amber-400 text-amber-400 hover:bg-neutral-700 dark:hover:bg-neutral-700"
            variant="outline"
          >
            Join Group
          </Button>{" "}
        </Link>
        <div className="">
          <h1 className="text-white lg:text-3xl">
            Cryptocurrency Course Series
          </h1>
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
      </div>
    </>
  );
}
