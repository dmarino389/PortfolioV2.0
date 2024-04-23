// components/ProjectCard.jsx
import Image from "next/image";

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className="group w-[320px] h-[380px] overflow-hidden rounded shadow-lg m-4 cursor-pointer relative">
      {/* Image with optimized resolution using Next.js Image component */}
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-opacity duration-300"
      />

      {/* Description overlay, hidden by default, shown on hover */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-center text-lg md:text-xl px-4">
          {description}
        </p>
      </div>

      {/* Invisible overlay for clicking */}
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
      >
        <span className="sr-only">View &apos;{title}&apos;</span>
      </a>
    </div>
  );
};

export default ProjectCard;
