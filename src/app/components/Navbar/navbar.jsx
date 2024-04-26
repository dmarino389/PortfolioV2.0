// app/layout.jsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <Link legacyBehavior href="/" passHref>
        <a className="text-xl font-bold">
          {/* The Image component for logos should be wrapped in an anchor tag */}
          <Image src="/initiallogo.jpg" alt="Logo" width={60} height={60} />
        </a>
      </Link>
      <h1 className="text-white text-3xl">Dimitrius Marino</h1> {/* Added h2 tag with white text color */}
      <Link legacyBehavior href="/contact" passHref>
        <a className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-md">
          Say Hello
        </a>
      </Link>
    </nav>
  );
}