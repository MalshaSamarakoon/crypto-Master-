// FeedbacksLanding.tsx
import React, { useState } from "react";
import Accent from "./Accent";
import clsx from "clsx";
import "./FeedbacksLanding.css";

export default function FeedbacksLanding() {
  const feedbacks = [
    {
      text: "Thank you Moon Crew. Highly recommended free signal service.",
      image: "/images/user1.png",
      name: "Jude Preenath Fernando",
      link: "https://www.facebook.com/share/p/Ajie5BTdScV6DEKk/?mibextid=WC7FNe",
    },
    {
      text: "Oyage trade supiri...mn supiri gemak gahagana yanawa..love you moon coin team guys..,,♥️♥️♥️",
      image: "/images/user2.png",
      name: "Legends Lankan",
      link: "https://www.facebook.com/share/v/oK1k4j4ANkqi6pYH/?mibextid=WC7FNe",
    },
    {
      text: "Highly recommend😍♥️ trading එපා වෙලා ඉන්නකොට හම්බෙච්චි family එකක්. අපි දාන trade එක ගැන අපිට වඩා හිතන කෙනෙක් එක්ක වැඩ කරන්න ලැබෙන එකම ඇති. Trade එකක් දීලා ඒ trade එකේ movement එකෙන් movement එකට update දෙන එකම family එක♥️",
      image: "/images/user3.jpg",
      name: "Miuranga Dilshan",
      link: "https://m.facebook.com/story.php?story_fbid=pfbid0BN6DuuxD7yjc5MwdUykMB6MhWseYpTuGhti8odhgiafcS8NwmPiX2tYQMHi8ejJjl&id=100088189332415",
    },
    {
      text: "Moon coin highly recommend 👍👍👍",
      image: "/images/user4.jpg",
      name: "Chrishty Ranil",
      link: "https://www.facebook.com/share/p/bWF9QFmRbE28RVHb/?",
    },
    {
      text: "Me strategy eka supiri ewa witharak denwanm loss wennema nathi tharam pereyhakamath nathuwa ibema galawila 🥰🥰🥰🥰 eka top strategy 🥰",
      image: "/images/user1.png",
      name: "Muditha Hamuduruwo ",
      link: "https://m.facebook.com/story.php?story_fbid=pfbid02SBaD7gpMxd2Ea9JpqCFViThNC31FTWDJCqqkR2cadLX36x9uEX7QJifgH4FFiubBl&id=100088189332415",
    },
    {
      text: "Best place to learn trading and many things highly recommend 🫂🌝",
      image: "/images/user2.png",
      name: "Nipuna Chaminda",
      link: "https://m.facebook.com/story.php?story_fbid=pfbid02SBaD7gpMxd2Ea9JpqCFViThNC31FTWDJCqqkR2cadLX36x9uEX7QJifgH4FFiubBl&id=100088189332415",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(-1);
  let scrollInterval: NodeJS.Timeout | null = null;

  const handleSeeMoreClick = (index: any) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const startScrolling = (offset: number) => {
    scrollList(offset); 
    scrollInterval = setInterval(() => {
      scrollList(offset); 
    }, 100); 
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
                      border: "2px dashed #FFBF0050",
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
                    {/* <img
                      src={feedback.image}
                      alt={`User ${index + 1}`}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        marginRight: "50px",
                      }}
                    /> */}
                    <div>
                      <a
                        href={feedback.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "contents",
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        <p style={{ fontWeight: "bold" }}>{feedback.name}</p>
                      </a>

                      {feedback.text.length >
                      (window.innerWidth < 450 ? 50 : 100) ? (
                        <>
                          {expandedIndex === index
                            ? feedback.text
                            : `${feedback.text.slice(
                                0,
                                window.innerWidth < 450 ? 50 : 100
                              )}... `}
                          {feedback.text.length >
                            (window.innerWidth < 450 ? 50 : 100) && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSeeMoreClick(index);
                              }}
                              className="text-amber-500 cursor-pointer"
                            >
                              {expandedIndex === index
                                ? "See Less"
                                : "See More"}
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
