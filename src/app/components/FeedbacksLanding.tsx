// FeedbacksLanding.tsx
import React, { useState } from "react";
import Accent from "./Accent";
import clsx from "clsx";
import "./FeedbacksLanding.css";

export default function FeedbacksLanding() {
  const feedbacks = [
    {
      text: "මම ක්‍රිප්ටෝ ට්‍රෙඩින්ග් කරන්නේ නැහැ එත් ක්‍රිප්ටො ගැන දැනුමක් තියෙනවා Best place to learn trading and many things highly recommend",
      image: "/images/user1.png",
      name: "John Doe",
    },
    {
      text: "Best place to learn trading and many things highly recommend 🫂🌝",
      image: "/images/user2.png",
      name: "Jane Smith",
    },
    {
      text: "Cripto currency ඉගෙන ගන්න ආසාවෙන්න ඉන්න අයට recommen කරන්න",
      image: "/images/user3.jpg",
      name: "Alex Johnson",
    },
    {
      text: "Cripto currency ඉගෙන ගන්න ආසාවෙන්න ඉන්න අයට recommen කරන්න",
      image: "/images/user4.jpg",
      name: "Alex Johnson",
    },
    {
      text: "මම ක්‍රිප්ටෝ ට්‍රෙඩින්ග් කරන්නේ නැහැ එත් ක්‍රිප්ටො ගැන දැනුමක් තියෙනවා",
      image: "/images/user1.png",
      name: "John Doe",
    },
    {
      text: "Best place to learn trading and many things highly recommend 🫂🌝",
      image: "/images/user2.png",
      name: "Jane Smith",
    },
    {
      text: "Cripto currency ඉගෙන ගන්න ආසාවෙන්න ඉන්න අයට recommen කරන්න",
      image: "/images/user3.jpg",
      name: "Alex Johnson",
    },
    {
      text: "Cripto currency ඉගෙන ගන්න ආසාවෙන්න ඉන්න අයට recommen කරන්න",
      image: "/images/user4.jpg",
      name: "Alex Johnson",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(-1);
  let scrollInterval: NodeJS.Timeout | null = null;

  const handleSeeMoreClick = (index: any) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const startScrolling = (offset: number) => {
    scrollList(offset); // Initial scroll
    scrollInterval = setInterval(() => {
      scrollList(offset); // Continuous scroll
    }, 100); // Adjust the interval for the desired scrolling speed
  };

  const stopScrolling = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
    }
  };

  const scrollList = (offset: number) => {
    const list = document.querySelector(".custom-scrollbar");
    if (list) {
      list.scrollTop += offset;
    }
  };

  return (
    <section className="relative">
      <div className="h-full w-full layout items-center lg:px-20 sm:px-10 pb-6 ">
        <h2 className="text-4xl md:text-6xl text-right ">
          <Accent className="inline decoration-clone leading-snug dark:leading-none">
            Success Stories
          </Accent>
        </h2>
      </div>
      <div className=" layout flex flex-col items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 flex justify-between lg:p-10 sm:p-0">
        <div className="h-full w-full overflow-y-auto custom-scrollbar">
          <ul className="h-full" style={{ maxHeight: "350px" }}>
            <div
              className="text-base text-neutral-300 md:text-xl mx-6"
              style={{ lineHeight: "2", letterSpacing: "0.9px" }}
            >
              <ul className="pl-6 list-none">
              {feedbacks.map((feedback, index) => (
  <li
    key={index}
    style={{
      backgroundColor: "#FFFFFF08",
      border: "2px dashed #8d6e1b50",
      color: "#FFFFFF90",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "30px",
      overflow: "hidden",
      fontSize: "14px",
      display: "flex",
      alignItems: "center", // Align items horizontally
    }}
    className={`feedback-item ${
      expandedIndex === index ? "expanded" : ""
    }`}
    onClick={() => handleSeeMoreClick(index)}
  >
    <img
      src={feedback.image}
      alt={`User ${index + 1}`}
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        marginRight: "50px",
      }}
    />
    <div>
      <p style={{ fontWeight: "bold" }}>{feedback.name}</p>
      {feedback.text.length > (window.innerWidth < 450 ? 10 : 100) ? (
        <>
          {expandedIndex === index
            ? feedback.text
            : `${feedback.text.slice(0, window.innerWidth < 450 ? 10 : 100)}... `}
          {feedback.text.length > (window.innerWidth < 450 ? 10 : 100) && (
            <button
              onClick={() => handleSeeMoreClick(index)}
              className="text-amber-500 cursor-pointer"
            >
              {expandedIndex === index ? "See Less" : "See More"}
            </button>
          )}
        </>
      ) : (
        feedback.text
      )}
    </div>
  </li>
))}
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}
