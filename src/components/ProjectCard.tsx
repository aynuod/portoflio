// components/ProjectCard.tsx
import React from "react";

type ProjectCardProps = {
  title: string;
  technologies: string[];
  description: string;
  videoUrl?: string; // Optionnel, pour la vidéo de démonstration
  githubUrl: string;
  date: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  technologies,
  description,
  videoUrl,
  githubUrl,
  date,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        {/* Video Section */}
        {videoUrl ? (
          <div className="md:flex-shrink-0">
            <video className="w-full h-48 object-cover md:w-48" controls>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : null}

        <div className="p-8">
          {/* Project Title */}
          <h3 className="block mt-1 text-lg leading-tight font-medium text-black">
            {title}
          </h3>


            {/* Date */}
            <p className="mt-2 text-gray-500">
              <strong>Date: </strong>
              {date}
            </p>

          {/* Technologies Used */}
          <p className="mt-2 text-gray-500">
            <strong>Technologies: </strong>
            {technologies.join(", ")}
          </p>

          {/* Project Description */}
          <p className="mt-2 text-gray-500">{description}</p>

          {/* GitHub Button */}
          <div className="mt-4">
            <a
              href={githubUrl}
              target="_blank"
              className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-800"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
