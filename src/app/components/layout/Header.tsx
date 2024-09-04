"use client";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import Image from "next/image";
import Accent from "@/app/components/Accent";
import UnstyledLink from "@/components/links/UnstyledLink";

type HeaderProps = {
  large?: boolean;
};

export default function Header({ large = false }: HeaderProps) {
  //#region  //*=========== Route Functionality ===========
  const pathname = usePathname(); // Use pathname instead of asPath
  const arrOfRoute = pathname ? pathname.split("/") : [];
  const baseRoute = arrOfRoute.length > 1 ? "/" + arrOfRoute[1] : "";

  //#endregion  //*======== Route Functionality ===========

  //#region  //*=========== Scroll Shadow ===========
  const [onTop, setOnTop] = React.useState<boolean>(true);
  React.useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.pageYOffset === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //#endregion  //*======== Scroll Shadow ===========

  // State management for dropdowns
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] =
    React.useState<boolean>(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] =
    React.useState<boolean>(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] =
    React.useState<boolean>(false);

  const router = useRouter(); // Keep useRouter for navigation

  return (
    <header
      className={clsx(
        "bg-dark sticky top-0 z-50 transition-shadow",
        !onTop && "shadow-sm"
      )}
    >
      {/* Skip Navigation */}
      <a
        href="#skip-nav"
        className={clsx(
          "rounded-sm p-2 transition",
          "font-medium text-black dark:text-white",
          "dark:bg-dark bg-white",
          "dark:hover:text-primary-300 group",
          "focus:ring-primary-300 focus:outline-none focus:ring",
          "absolute left-4 top-4",
          "-translate-y-16 focus:translate-y-0"
        )}
      >
        <Accent>Skip to main content</Accent>
      </a>

      {/* Main Navigation */}
      <div className="bg-dark">
        <nav
          className={clsx(
            "layout flex items-center justify-between py-1",
            large && "lg:max-w-[68rem]"
          )}
        >
          <div className="flex items-center py-2">
            {/* Logo container */}
            <Image src="/images/Logo.PNG" alt="Logo" width={100} height={80} />
          </div>

          <ul className="flex items-center space-x-3 text-xs md:space-x-10 md:text-base">
            {/* Navigation items container */}
            {links.map(({ href, label }) => (
              <li
                key={`${href}${label}`}
                className={clsx("relative")}
                onMouseEnter={() => {
                  if (label === "Courses") setIsCoursesDropdownOpen(true);
                  if (label === "About") setIsAboutDropdownOpen(true);
                  if (label === "Services") setIsServicesDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (label === "Courses") setIsCoursesDropdownOpen(false);
                  if (label === "About") setIsAboutDropdownOpen(false);
                  if (label === "Services") setIsServicesDropdownOpen(false);
                }}
              >
                {label === "Courses" ? (
                  <div className="relative group">
                    <div
                      className={clsx(
                        "rounded-sm py-2 transition-colors",
                        "text-hover-gold font-medium text-black",
                        "focus-visible:ring-primary-300 focus:outline-none focus-visible:ring",
                        "flex items-center"
                      )}
                    >
                      <UnstyledLink
                        href={href}
                        className={clsx(
                          "transition-colors",
                          "bg-primary-300/0 group-hover:bg-primary-300/20 dark:group-hover:bg-primary-300/0",
                          href === baseRoute &&
                            "!bg-primary-300/50 dark:from-primary-300 dark:to-primary-400 dark:bg-gradient-to-tr dark:bg-clip-text dark:text-transparent"
                        )}
                      >
                        {label}
                      </UnstyledLink>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className={clsx(
                          "ml-2 h-4 w-4",
                          isCoursesDropdownOpen ? "rotate-180 transform" : ""
                        )}
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <ul
                      className={clsx(
                        "absolute left-0 mt-2 w-auto bg-white text-black shadow-lg dark:bg-gray-800 dark:text-white",
                        "transition-opacity duration-300",
                        isCoursesDropdownOpen ? "opacity-100" : "opacity-0"
                      )}
                    >
                      {dropdownItems.courses.map(({ href, label }) => (
                        <li key={`${href}${label}`}>
                          <UnstyledLink
                            href={href}
                            onClick={(e) => {
                              e.preventDefault();
                              router.push(href); // Navigates to the courses page
                              setTimeout(() => {
                                const element = document.getElementById(
                                  label.replace(/\s+/g, "-").toLowerCase()
                                );
                                if (element) {
                                  window.scrollTo({
                                    top: element.offsetTop - 100, // Adjust for the sticky header
                                    behavior: "smooth",
                                  });
                                }
                              }, 100); // Adjust timing as needed
                            }}
                            className="block px-4 py-2 text-hover-gold dark:hover:bg-gray-700"
                          >
                            {label}
                          </UnstyledLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : label === "About" ? (
                  <div className="relative group">
                    <div
                      className={clsx(
                        "rounded-sm py-2 transition-colors",
                        "text-hover-gold font-medium text-black",
                        "focus-visible:ring-primary-300 focus:outline-none focus-visible:ring",
                        "flex items-center"
                      )}
                    >
                      <UnstyledLink
                        href={href}
                        className={clsx(
                          "transition-colors",
                          "bg-primary-300/0 group-hover:bg-primary-300/20 dark:group-hover:bg-primary-300/0",
                          href === baseRoute &&
                            "!bg-primary-300/50 dark:from-primary-300 dark:to-primary-400 dark:bg-gradient-to-tr dark:bg-clip-text dark:text-transparent"
                        )}
                      >
                        {label}
                      </UnstyledLink>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className={clsx(
                          "ml-2 h-4 w-4",
                          isAboutDropdownOpen ? "rotate-180 transform" : ""
                        )}
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <ul
                      className={clsx(
                        "absolute left-0 mt-2 w-auto bg-white text-black shadow-lg dark:bg-gray-800 dark:text-white",
                        "transition-opacity duration-300",
                        isAboutDropdownOpen ? "opacity-100" : "opacity-0"
                      )}
                    >
                      {dropdownItems.about.map(({ href, label }) => (
                        <li key={`${href}${label}`}>
                          <UnstyledLink
                            href={href}
                            className="block px-4 py-2 text-hover-gold dark:hover:bg-gray-700"
                          >
                            {label}
                          </UnstyledLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : label === "Services" ? (
                  <div className="relative group">
                    <div
                      className={clsx(
                        "rounded-sm py-2 transition-colors",
                        "text-hover-gold font-medium text-black",
                        "focus-visible:ring-primary-300 focus:outline-none focus-visible:ring",
                        "flex items-center"
                      )}
                    >
                      <UnstyledLink
                        href={href}
                        className={clsx(
                          "transition-colors",
                          "bg-primary-300/0 group-hover:bg-primary-300/20 dark:group-hover:bg-primary-300/0",
                          href === baseRoute &&
                            "!bg-primary-300/50 dark:from-primary-300 dark:to-primary-400 dark:bg-gradient-to-tr dark:bg-clip-text dark:text-transparent"
                        )}
                      >
                        {label}
                      </UnstyledLink>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className={clsx(
                          "ml-2 h-4 w-4",
                          isServicesDropdownOpen ? "rotate-180 transform" : ""
                        )}
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <ul
                      className={clsx(
                        "absolute left-0 mt-2 w-auto bg-white text-black shadow-lg dark:bg-gray-800 dark:text-white",
                        "transition-opacity duration-300",
                        isServicesDropdownOpen ? "opacity-100" : "opacity-0"
                      )}
                    >
                      {dropdownItems.services.map(({ href, label }) => (
                        <li key={`${href}${label}`}>
                          <UnstyledLink
                            href={href}
                            className="block px-4 py-2 text-hover-gold dark:hover:bg-gray-700"
                          >
                            {label}
                          </UnstyledLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <UnstyledLink
                    href={href}
                    className={clsx(
                      "rounded-sm py-2 px-4 transition-colors",
                      "text-hover-gold font-medium text-black",
                      "focus-visible:ring-primary-300 focus:outline-none focus-visible:ring",
                      href === baseRoute &&
                        "!bg-primary-300/50 dark:from-primary-300 dark:to-primary-400 dark:bg-gradient-to-tr dark:bg-clip-text dark:text-transparent"
                    )}
                  >
                    {label}
                  </UnstyledLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

const links = [
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  // Add other links as needed
];

const dropdownItems = {
  courses: [
    { href: "/courses/intro", label: "Introduction" },
    { href: "/courses/advanced", label: "Advanced Topics" },
    // Add other courses as needed
  ],
  about: [
    { href: "/about/team", label: "Our Team" },
    { href: "/about/mission", label: "Our Mission" },
    // Add other about items as needed
  ],
  services: [
    { href: "/services/consulting", label: "Consulting" },
    { href: "/services/development", label: "Development" },
    // Add other services as needed
  ],
};
