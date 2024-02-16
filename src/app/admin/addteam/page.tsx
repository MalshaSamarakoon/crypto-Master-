"use client";
import clsx from "clsx";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useLoaded from "@/hooks/useLoaded";

export default function AddTeam() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageBase64, setImageBase64] = useState(""); // State to store base64 image
  const isLoaded = useLoaded();
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !title || !description) {
      alert("Name, Title, and description are required.");
      return;
    }

    try {
      const res = await fetch(`${process.env.BASE_URL}/api/teams`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, title, description, image: imageBase64 }),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        throw new Error("Failed to create a team");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = async (e: any) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result?.toString() || "";
      setImageBase64(base64String);
    };

    reader.readAsDataURL(selectedFile);
  };

  return (
    <>
      <main style={{ backgroundColor: "white" }}>
        <div className="p-40 sm:ml-64">
          <section
            className={clsx(
              "min-h-main -mt-20 flex flex-col justify-center",
              isLoaded && "fade-in-start"
            )}
          >
            <section className="relative">
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className=" py-10 ">
                  <h1 className=" "> Add Lecture Details </h1>
                </div>
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
                          onChange={handleFileChange}
                        />
                      </label>

                      <p className="pl-1 text-dark">or drag and drop</p>
                    </div>
                    <p className="text-xs text-dark">
                      PNG, JPG, GIF up to 10MB
                    </p>
                    {/* Display uploaded image */}
                    {imageBase64 && (
                      <div className="mt-3">
                        <img
                          src={imageBase64}
                          alt="Uploaded Image"
                          className="rounded-md max-w-full max-h-48 mx-auto"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="h-12 w-80 mt-10 rounded-md bg-amber-500 font-bold text-white py-3 px-6 w-fit transition duration-300 ease-in-out hover:bg-amber-600"
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
