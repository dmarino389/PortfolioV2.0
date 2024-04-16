// app/page.jsx
"use client";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";

export default function Page() {
  return (
    <div className="flex flex-col">
      {/* Introduction Section */}
      <section id='home' className="flex items-center justify-center w-full min-h-screen bg-gray-200">
  <div className="text-center">
    <h1 className="text-5xl font-bold">Next.Js Developer</h1>
    <p className="mt-4 text-xl">I design and code beautifully simple things, and I love what I do.</p>
    {/* Profile Image */}
    <img src="/profile.webp" alt="Profile" className="mt-8 mb-8 w-48 h-48 object-cover rounded-full mx-auto" />
    {/* Computers SVG */}
    <img src="/computers.svg" alt="Computers" className="mt-8 mx-auto" />
  </div>
</section>



      {/* Profession and Skills Section */}
  <section id='skills' className="w-full min-h-screen bg-white">
  <div className="container mx-auto px-6 py-10 text-center"> {/* Adjusted padding for overall alignment */}
    <h2 className="text-4xl font-semibold mb-8">Hi, I'm Dimitrius, Pleasure to meet you!</h2>
    <p className="text-xl mb-10 font-semibold">I'm an experienced software developer with an interest in solving complex issues and enjoying good music. I specialize in creating<br/> functional and user-friendly applications</p>

    <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8"> {/* Flex container for skills */}
      {/* Frontend Developer Column */}
      <div className="flex-1 mt-40"> {/* Takes up half of the space in a flex container */}
        <div className="mb-4 w-32 h-32 mx-auto"> {/* Placeholder for Frontend SVG */}
          {/* Replace with img tag or Image component */}
          <img src="/Frontend.svg" alt="Frontend Developer" className="w-full h-full" />
        </div>
        <h3 className="text-3xl font-semibold">Frontend Developer</h3><br />
        <p className="mt-2 font-bold">I create responsive and dynamic user interfaces with<br/> modern frontend technologies.</p>
        <br /><br />
        <p className='text-purple-700 font-bold'>Languages I speak</p><br />
        <p className='font-bold'>HTML, CSS, JavaScript </p><br /><br />
        <p className='font-bold text-purple-700'>Tools and Frameworks</p><br />
        <p className='font-bold'>Next.js, React.js, TailwindCSS </p>
      </div>

      {/* Backend Developer Column */}
      <div className="flex-1 mt-40"> {/* Takes up half of the space in a flex container */}
        <div className="mb-4 w-32 h-32 mx-auto"> {/* Placeholder for Backend SVG */}
          {/* Replace with img tag or Image component */}
          <img src="/Backend.svg" alt="Backend Developer" className="w-full h-full" />
        </div>
        <h3 className="text-3xl font-semibold">Backend Developer</h3><br />
        <p className="mt-2 font-bold">I architect and build scalable and <br /> performant server-side applications.</p>
        <br /><br />
        <p className='text-purple-700 font-bold'>Languages I speak</p><br />
        <p className='font-bold'>Python, PostgresQL </p><br /><br />
        <p className='font-bold text-purple-700'>Tools and Frameworks</p><br />
        <p className='font-bold'>Flask, Jinja2, MongoDB, Postman </p>
      </div>
    </div>
  </div>
</section>



{/* Projects Section */}
<section className="w-full min-h-screen bg-white-100">
  <div className="container mx-auto px-6 py-20">
    <h2 className="text-4xl font-semibold text-center mb-12">My Recent Work</h2>
    <div className="flex flex-wrap justify-center gap-40 ">
      {/* Map through your projects and create a card for each */}
      <ProjectCard
        title="Pantry Pal"
        description="Keep track of your pantry items and find recipes based on available ingredients."
        imageUrl="/pantrypal.webp"
        projectUrl="https://pantry-pal-iota.vercel.app/"
      />
      <ProjectCard
        title="Pantry Pal"
        description="A web-based weather app built using JavaScript, HTML, and CSS leveraging the OpenWeather API."
        imageUrl="/suncloud.webp"
        projectUrl="https://dmarino389.github.io/weather_app//"
      />
      {/* Repeat <ProjectCard /> for other projects */}
    </div>
  </div>
</section>
    </div>
  );
}
