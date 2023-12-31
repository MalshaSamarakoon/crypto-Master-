"use client";
import clsx from "clsx";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useLoaded from "@/hooks/useLoaded";

export default function AddTeam() {
  // console.log("HI")

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const isLoaded = useLoaded();

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !title || !description) {
      alert("Name, Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/teams", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a team");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <main style={{ backgroundColor: "white" }}>
      <div className=" p-40 sm:ml-64 "> 
        <section
          className={clsx(
            "min-h-main -mt-20 flex flex-col justify-center",
            isLoaded && "fade-in-start"
          )}
        >
          <section className="relative">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">

              <label className="block text-sm font-medium text-dark">
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Name"
              />
              <label className="block text-sm font-medium text-dark">
                Title
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Title"
              />

              <label className="block text-sm font-medium text-dark">
                Description
              </label>
              <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Member Description"
              />

              <div>
                <label className="block text-sm font-medium text-dark">
                  Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-500 border-solid rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-dark"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>

                      <p className="pl-1 text-dark">or drag and drop</p>
                    </div>
                    <p className="text-xs text-dark">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
              >
                Add Member
              </button>
            </form>
          </section>
        </section>
      </div>
    </main>
    </>
  );
}
