"use client";
import Image from "next/image";
import * as React from "react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#002147' }} className=" border-t  border-neutral-500 pb-2 pt-20 ">
      <main className="layout flex flex-col items-center">
        <footer className=" text-center text-neutral-500  lg:text-left">
          <div className="flex items-center justify-center ">
            <div className="mr-12 hidden lg:block">
              <span>Get connected with us on social networks:</span>
            </div>
            <div className="flex justify-center">
              <a
                href="https://www.facebook.com/profile.php?id=100088189332415&mibextid=ZbWKwL"
                className="mr-6 text-neutral-500 dark:text-neutral-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              <a
                href="https://youtube.com/@mooncointrader?si=aPWEImi2rUHOBRlm"
                className="mr-6 text-neutral-600 dark:text-neutral-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>{" "}
                </svg>
              </a>
              <a
                href="https://youtube.com/@moon_education?si=bpXNKNndqxfT7o1U"
                className="mr-6 text-neutral-600 dark:text-neutral-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>{" "}
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@udara_rajapaksha?_t=8gr6SRnmxBy&_r=1"
                className="mr-6 text-neutral-600 dark:text-neutral-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 6 5 L 18 5 C 18.56503 5 19 5.4349698 19 6 L 19 18 C 19 18.56503 18.56503 19 18 19 L 6 19 C 5.4349698 19 5 18.56503 5 18 L 5 6 C 5 5.4349698 5.4349698 5 6 5 z M 12 7 L 12 14 C 12 14.56503 11.56503 15 11 15 C 10.43497 15 10 14.56503 10 14 C 10 13.43497 10.43497 13 11 13 L 11 11 C 9.3550302 11 8 12.35503 8 14 C 8 15.64497 9.3550302 17 11 17 C 12.64497 17 14 15.64497 14 14 L 14 10.232422 C 14.616148 10.671342 15.259118 11 16 11 L 16 9 C 15.952667 9 15.262674 8.7809373 14.78125 8.3613281 C 14.299826 7.941719 14 7.4149911 14 7 L 12 7 z"></path>{" "}
                </svg>
              </a>
              <a
                href="https://t.me/mooncoinalerts"
                className="text-neutral-600 dark:text-neutral-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-4"
                  fill="currentColor"
                  viewBox="0 0 30 50"
                >
                  <path d="M5.83,23.616c12.568-5.529,28.832-12.27,31.077-13.203c5.889-2.442,7.696-1.974,6.795,3.434 c-0.647,3.887-2.514,16.756-4.002,24.766c-0.883,4.75-2.864,5.313-5.979,3.258c-1.498-0.989-9.059-5.989-10.7-7.163 c-1.498-1.07-3.564-2.357-0.973-4.892c0.922-0.903,6.966-6.674,11.675-11.166c0.617-0.59-0.158-1.559-0.87-1.086 c-6.347,4.209-15.147,10.051-16.267,10.812c-1.692,1.149-3.317,1.676-6.234,0.838c-2.204-0.633-4.357-1.388-5.195-1.676 C1.93,26.43,2.696,24.995,5.83,23.616z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="mx-6 py-10 text-center md:text-left">
            <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="">
              <div className="flex justify-center md:justify-start items-center mb-10">
            {/* Logo container */}
            <Image src="/images/Logo.PNG" alt="Logo" width={100} height={80} />
          </div>
                <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                  Moon Education
                </h6>
                <p>
                  Enroll with us to embark on your journey toward financial
                  empowerment.
                </p>
              </div>
              <div className="">
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Servises
                </h6>
                <p className="mb-4">
                  <a
                    href="#!"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Cryptocurrency
                  </a>
                </p>
                <p className="mb-4">
                  <a
                    href="#!"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Forex Trading
                  </a>
                </p>
                <p className="mb-4">
                  <a
                    href="#!"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Information Technology
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Academic
                  </a>
                </p>
              </div>
              <div className="">
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Courses
                </h6>
                <p className="mb-4">
                  <a
                    href="#!"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Crypto Master A-Z Course
                  </a>
                </p>
                <p className="mb-4">
                  <a
                    href="#!"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    SME Courses
                  </a>
                </p>
                <p className="mb-4">
                  <a
                    href="#!"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Advanced Level
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Information Technology
                  </a>
                </p>
              </div>
              <div>
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Contact
                </h6>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                  Bodhiraja Mawatha, Kurunegala
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  mooneducationcenter@gmail.com
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5"
                  >
                    <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />
                  </svg>
                  + 94 71 342 6510
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5"
                  >
                    <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />
                  </svg>
                  + 94 71 142 2998
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
      <div style={{ backgroundColor: '#01162d' }} className=" p-6 text-center ">
        {/* <span>© 2023 Copyright:</span> */}
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://tailwind-elements.com/"
        >
          Moon Education
        </a>
      </div>
    </footer>
  );
}
