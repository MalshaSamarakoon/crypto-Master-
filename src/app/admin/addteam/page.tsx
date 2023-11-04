"use client";
import clsx from "clsx";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "lucide-react";
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
    <main style={{ backgroundColor: "white" }}>
      <div className="container mx-auto px-4">
        <section
          className={clsx(
            " min-h-main -mt-20 mb-10 flex flex-col justify-center",
            isLoaded && "fade-in-start"
          )}
        >
          <section className=" relative">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Name"
              />

              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Title"
              />

              <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Team Description"
              />

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
  );
}
