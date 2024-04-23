import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/navbar"; // Import Navbar component
import "./globals.css";

// app/layout.jsx

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
        <Navbar />  {/* Include Navbar component */}
        <main>
          {children}
        </main>
        <footer className="p-4 bg-gray-200 text-center">
          © {new Date().getFullYear()} Your Name. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
