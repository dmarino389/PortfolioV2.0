// app/layout.jsx
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Any other head content should go here */}
      </head>
      <body className={inter.className}>
        {/* Navbar should go here */}
        <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
          {/* Link to home */}
          <a href="/" className="text-xl font-bold">My Portfolio</a> {/* Replace with your logo */}
          {/* Say Hello Link */}
          <a href="/contact" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-md">Say Hello</a>
        </nav>

        {/* Main content of the page */}
        <main>
          {children}
        </main>

        {/* Footer should go here */}
        <footer className="p-4 bg-gray-200 text-center">
          {/* Footer content */}
          © {new Date().getFullYear()} Your Name. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
