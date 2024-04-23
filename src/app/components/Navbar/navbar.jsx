// app/layout.jsx
"use client";

import { useEffect } from "react";

export default function Layout({ children }) {
  useEffect(() => {
    // Any client-side effects can be placed here
  }, []);

  const handleScroll = (event, target) => {
    event.preventDefault(); // Prevent the default anchor behavior

    const targetElement = document.querySelector(target); // Get the target element

    if (targetElement) {
      // Scroll to the target element
      const topOffset = 60; // Adjust this value if you have a fixed header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
        {/* Logo and link to home */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="text-xl font-bold cursor-pointer"
        >
          <img src="/initiallogo.jpg" alt="Logo" className="h-24 w-24 mr-2" />
         
        </a>
        {/* Say Hello link */}
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "#contact")}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-md cursor-pointer"
        >
          Say Hello
        </a>
      </nav>
      
      <main>{children}</main>
      {/* Footer component will go here */}
    </>
  );
}
