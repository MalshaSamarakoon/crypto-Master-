// Define the type for the course prop
interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  duration: string;
  // Add other fields as needed
}

// Import necessary modules
import Link from "next/link";

// CourseCard component with course prop type annotation
export default function CourseCard({ course }: { course: Course }) {
  return (
    <div>
      <div className="bg-bg-dark relative items-center border-[2px] border-[#d9b157] pb-8 text-center text-[#002147] shadow-xl">
        <img src={course.imageUrl} alt={course.title} />
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <p>{course.price}</p>
        <p>{course.duration}</p>
        {/* Add other content as needed */}
      </div>
    </div>
  );
}

// AddTeam component with full form implementation
"use client";
import clsx from "clsx";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useLoaded from "@/hooks/useLoaded";

export default function AddTeam() {
  const [mode, setMode] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [courseDescription, setCourseDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [priceDescription, setPriceDescription] = useState<string>("");
  const [courseContentItems, setCourseContentItems] = useState<string[]>([]);
  const [newContentItem, setNewContentItem] = useState<string>("");
  const [informationItems, setInformationItems] = useState<string[]>([]);
  const [newInformationItem, setNewInformationItem] = useState<string>("");
  const [imageBase64, setImageBase64] = useState<string>(""); // State to store base64 image

  const addContentItem = () => {
    if (newContentItem.trim() !== "") {
      setCourseContentItems([...courseContentItems, newContentItem]);
      setNewContentItem("");
    }
  };

  const removeContentItem = (index: number) => {
    const updatedItems = [...courseContentItems];
    updatedItems.splice(index, 1);
    setCourseContentItems(updatedItems);
  };

  const addInformationItem = () => {
    if (newInformationItem.trim() !== "") {
      setInformationItems([...informationItems, newInformationItem]);
      setNewInformationItem("");
    }
  };

  const removeInformationItem = (index: number) => {
    const updatedItems = [...informationItems];
    updatedItems.splice(index, 1);
    setInformationItems(updatedItems);
  };

  const isLoaded = useLoaded();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !mode ||
      !type ||
      !title ||
      !description ||
      !courseDescription ||
      !price ||
      !duration
    ) {
      alert("All details are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/courses", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          mode,
          type,
          title,
          description,
          courseDescription,
          price,
          duration,
          priceDescription,
          image: imageBase64,
          courseContent: courseContentItems,
          information: informationItems,
        }),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        throw new Error("Failed to create a course");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result?.toString() || "";
      setImageBase64(base64String);
    };

    reader.readAsDataURL(selectedFile);
  };

  return (
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
              <div className="py-10">
                <h1>Add Details for Course Card</h1>
              </div>
              <label className="block text-sm font-medium text-dark">
                Mode
              </label>
              <input
                onChange={(e) => setMode(e.target.value)}
                value={mode}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Name"
              />

              <label className="block text-sm font-medium text-dark">
                Type
              </label>
              <input
                onChange={(e) => setType(e.target.value)}
                value={type}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Course Type"
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
              <div className="py-10">
                <h1>Add Details for Course Page</h1>
              </div>
              <label className="block text-sm font-medium text-dark">
                Course Description
              </label>
              <textarea
                onChange={(e) => setCourseDescription(e.target.value)}
                value={courseDescription}
                className="border border-slate-500 px-8 py-2"
                placeholder="Course Description"
                rows={4}
                cols={50}
              />
              <label className="block text-sm font-medium text-dark">
                Price
              </label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Price"
              />
              <label className="block text-sm font-medium text-dark">
                Price Description
              </label>
              <input
                onChange={(e) => setPriceDescription(e.target.value)}
                value={priceDescription}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Price Description"
              />
              <label className="block text-sm font-medium text-dark">
                Duration
              </label>
              <input
                onChange={(e) => setDuration(e.target.value)}
                value={duration}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Course Duration"
              />
              <label className="block text-sm font-medium text-dark">
                Course Content
              </label>
              <ul>
                {courseContentItems.map((item, index) => (
                  <li key={index}>
                    {item}{" "}
                    <button
                      type="button"
                      onClick={() => removeContentItem(index)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <input
                onChange={(e) => setNewContentItem(e.target.value)}
                value={newContentItem}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="New Content Item"
              />
              <button
                type="button"
                onClick={addContentItem}
                className="border border-slate-500 px-8 py-2 mt-2"
              >
                Add Content Item
              </button>
              <label className="block text-sm font-medium text-dark">
                Information Items
              </label>
              <ul>
                {informationItems.map((item, index) => (
                  <li key={index}>
                    {item}{" "}
                    <button
                      type="button"
                      onClick={() => removeInformationItem(index)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <input
                onChange={(e) => setNewInformationItem(e.target.value)}
                value={newInformationItem}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="New Information Item"
              />
              <button
                type="button"
                onClick={addInformationItem}
                className="border border-slate-500 px-8 py-2 mt-2"
              >
                Add Information Item
              </button>
              <button
                type="submit"
                className="border border-slate-500 px-8 py-2 mt-4"
              >
                Submit
              </button>
            </form>
          </section>
        </section>
      </div>
    </main>
  );
}
