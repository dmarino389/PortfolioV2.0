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
          <Image src="/profile.webp" alt="Profile" width={200} height={300} className="object-cover rounded-full mx-auto mt-10" />
          {/* Computers SVG */}
          <Image src="/computers.svg" alt="Computers" width={500} height={200} className="object-cover mx-auto pt-10" />
        </div>
      </section>



      {/* Profession and Skills Section */}
      <section id='skills' className="w-full min-h-screen bg-white">
  <div className="container mx-auto px-6 py-10 text-center">
    <h2 className="text-4xl font-semibold mb-8">Hi, I&apos;m Dimitrius, Pleasure to meet you!</h2>
    <p className="text-xl mb-10 font-semibold">I&apos;m an experienced software developer with an interest in solving<br/> complex issues and creating functional and user-friendly applications</p>
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 md:px-0"> {/* Use padding to adjust layout on smaller screens */}
      {/* Frontend Developer Column */}
      <div className="flex-1 mt-20 md:mt-40"> {/* Use less margin-top on smaller screens */}
        <div className="mb-4 w-24 h-24 md:w-32 md:h-32 mx-auto">
          <Image src="/Frontend.svg" alt="Frontend Developer" width={300} height={300} />
        </div>
        <h3 className="text-3xl font-semibold">Frontend Developer</h3>
        <p className="mt-2 font-bold">I create responsive and dynamic user interfaces with modern frontend technologies.</p>
        <p className='text-purple-700 font-bold mt-4'>Languages I speak</p>
        <p className='font-bold'>HTML, CSS, JavaScript </p>
        <p className='font-bold text-purple-700 mt-4'>Tools and Frameworks</p>
        <p className='font-bold'>Next.js, React.js, TailwindCSS </p>
      </div>

      {/* Backend Developer Column */}
      <div className="flex-1 mt-20 md:mt-40">
        <div className="mb-4 w-24 h-24 md:w-32 md:h-32 mx-auto">
          <Image src="/Backend.svg" alt="Backend Developer" width={300} height={300} className="w-full h-full" />
        </div>
        <h3 className="text-3xl font-semibold">Backend Developer</h3>
        <p className="mt-2 font-bold">I architect and build scalable and performant server-side applications.</p>
        <p className='text-purple-700 font-bold mt-4'>Languages I speak</p>
        <p className='font-bold'>Python, PostgresQL </p>
        <p className='font-bold text-purple-700 mt-4'>Tools and Frameworks</p>
        <p className='font-bold'>Flask, Jinja2, MongoDB, Postman </p>
      </div>
    </div>
  </div>
</section>


{/* Projects Section */}
<section className="w-full min-h-screen bg-gray-200">
  <div className="container mx-auto px-6 py-20">
    <h2 className="text-4xl font-semibold text-center mb-12">My Recent Work</h2>
    <div className="flex flex-wrap justify-center gap-20 ">
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
      <ProjectCard
        title="PokeApp"
        description="The Pokédex App is an interactive and engaging web application I developed using Flask, Jinja2, SQLite, and Postman, with integration of the PokéAPI and Bootstrap for styling."
        imageUrl="/pokemon.png"
        projectUrl="https://poke-fbst.onrender.com/"
      />
      {/* Repeat <ProjectCard /> for other projects */}
    </div>
  </div>
</section>
    </div>
  );
}