import React from "react";
import Button from "@/components/buttons/Button";
import Link from "next/link";

export default function Academic() {

  return (
    <>
      <div className="lg:col-span-2 sm:col-span-1 text-neutral-300">
              
              <div className="">
                <h1 className="text-white lg:text-3xl">
                  Course Series
                </h1>
              </div>
              <p className="text-white mt-10 mb-10">
              Join us on our educational venture and empower yourself with the expertise needed in the dynamic crypto landscape.. Our meticulously crafted programs offer a blend of insightful sessions and hands-on learning experiences. 
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
