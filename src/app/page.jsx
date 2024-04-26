"use client";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import { useEffect, useState, useRef } from "react";

export default function Page() {
  const introRef = useRef(null);
  const skillsRef = useRef(null);
  const [isSkillsVisible, setSkillsVisible] = useState(false);
  const [isProjectsVisible, setProjectsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const introBottom = introRef.current.getBoundingClientRect().bottom;
      setSkillsVisible(introBottom < window.innerHeight);

      const skillsBottom = skillsRef.current.getBoundingClientRect().bottom;
      setProjectsVisible(skillsBottom < window.innerHeight);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Introduction Section with Parallax Effect */}
      <section ref={introRef} id='home' className="flex items-center justify-center w-full min-h-screen bg-gray-200">
        <div className="text-center transition-all duration-300 ease-in-out hover:scale-105">
        <h1 className="text-black font-bold mx-auto mb-8 underline text-4xl">Dimitrius Marino</h1> {/* Added h2 tag with white text color */}
          <h1 className="text-5xl font-bold">Next.Js Developer</h1>
          <p className="mt-8 text-xl">I design and code beautifully simple things, and I love what I do.</p>
          <div className="mx-auto mt-10 hover:rotate-[360deg] transition-transform duration-700">
            <Image src="/profile.webp" alt="Profile" width={200} height={300} className="object-cover rounded-full mx-auto" />
          </div>
          <div className="mx-auto pt-10">
            <Image src="/computers.svg" alt="Computers" width={500} height={200} className="object-cover mx-auto" />
          </div>
        </div>
      </section>

      {/* Profession and Skills Section with Controlled Visibility */}
      <section ref={skillsRef} id='skills'
         className={`w-full min-h-screen bg-white transition-opacity ${isSkillsVisible ? 'opacity-100' : 'opacity-0'}`}
         style={{ transitionDuration: isSkillsVisible ? '1000ms' : '0ms', transitionDelay: isSkillsVisible ? '500ms' : '0ms' }}>
        <div className="container mx-auto px-6 py-10 text-center">
          <h2 className="text-6xl font-semibold mb-8 ">Hi, I&apos;m Dimitrius, Pleasure to meet you!</h2>
            <hr className="border-t-4 " />         
            <hr className="border-t-4 " />
            <br />
          <p className="text-2xl mb-10 font-bold">I&apos;m an experienced software developer with an interest in solving complex issues and creating functional and user-friendly applications</p>
          {/* Frontend Developer Column */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 md:px-0">
            <div className="flex-1 mt-20 md:mt-40 hover:scale-110 transition-transform duration-300">
              <div className="mb-4 w-24 h-24 md:w-32 md:h-32 mx-auto">
                <Image src="/Frontend.svg" alt="Frontend Developer" width={300} height={300} />
              </div>
              <h3 className="text-3xl font-semibold">Frontend Developer</h3>
              <p className="mt-2 font-bold">I create responsive and dynamic user interfaces with modern frontend technologies.</p>
              <p className='text-purple-700 font-bold mt-4'>Languages I speak</p>
              <br />
              <p className='font-bold'>HTML, CSS, JavaScript </p>
              <br />
              <p className='font-bold text-purple-700 mt-4'>Tools and Frameworks</p>
              <br />
              <p className='font-bold'>Next.js, React.js, TailwindCSS </p>
            </div>

            {/* Backend Developer Column */}
            <div className="flex-1 mt-20 md:mt-40 hover:scale-110 transition-transform duration-300">
              <div className="mb-4 w-24 h-24 md:w-32 md:h-32 mx-auto">
                <Image src="/Backend.svg" alt="Backend Developer" width={300} height={300} className="w-full h-full" />
              </div>
              <h3 className="text-3xl font-semibold">Backend Developer</h3>
              <p className="mt-2 font-bold">I architect and build scalable and performant server-side applications.</p>
              <p className='text-purple-700 font-bold mt-4'>Languages I speak</p>
              <br />
              <p className='font-bold'>Python, PostgreSQL </p>
              <br />
              <p className='font-bold text-purple-700 mt-4'>Tools and Frameworks</p>
              <br />
              <p className='font-bold'>Flask, Jinja2, MongoDB, Postman </p>
            </div>
          </div>
        </div>
      </section>

            {/* Projects Section with Controlled Visibility */}
            <section className={`w-full min-h-screen bg-gray-200 bg-opacity-95 backdrop-filter backdrop-blur-lg py-20 transition-opacity ${isProjectsVisible ? 'opacity-100' : 'opacity-0'}`}
               style={{ transitionDuration: isProjectsVisible ? '1500ms' : '0ms', transitionDelay: isProjectsVisible ? '750ms' : '0ms' }}>
              <div className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-semibold text-center mb-12">My Recent Work</h2>
                <div className="flex flex-wrap justify-center gap-20">
                  <div>
                    <h1 className="text-2xl font-semibold ">PantryPal</h1>
                    <ProjectCard
                      title="Pantry Pal"
                      description="Keep track of your pantry items and find recipes based on available ingredients."
                      imageUrl="/pantrypal.webp"
                      projectUrl="https://pantry-pal-iota.vercel.app/"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold">SkyScript</h1>
                    <ProjectCard
                      title="Weather App"
                      description="A web-based weather app built using JavaScript, HTML, and CSS leveraging the OpenWeather API."
                      imageUrl="/suncloud.webp"
                      projectUrl="https://dmarino389.github.io/weather_app/"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold">PokeVault</h1>
                    <ProjectCard
                      title="PokeApp"
                      description="The Pok&eacute;dex App is an interactive and engaging web application I developed using Flask, Jinja2, SQLite, and Postman, with integration of the Pok&eacute;API and Bootstrap for styling."
                      imageUrl="/pokemon.png"
                      projectUrl="https://poke-fbst.onrender.com/"
                    />
                  </div>
                  {/* Repeat <div> with <h1> and <ProjectCard /> for other projects */}
                </div>
              </div>
            </section>
          </div>
        );
      }
