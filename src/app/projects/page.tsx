import React from "react";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    // {
    //   title: "Personal Portfolio",
    //   technologies: ["Next.js", "React", "Tailwind CSS", "Shadcn UI"],
    //   description: "A personal website showcasing my projects and professional journey.",
    //   videoUrl: "/videos/portfolio-demo.mp4",
    //   githubUrl: "https://github.com/DounyaGourja/mon-portfolio",
    //   date: "September 2024",
    // },
    {
      title: "CI/CD Pipeline with Jenkins and SonarQube",
      technologies: ["Spring Boot", "SonarQube", "Docker"],
      description: "Implementation of a continuous integration pipeline to compile, test, and analyze Java, Laravel, and Angular applications.",
      githubUrl: "https://github.com/aynuod/SonarPipelineDemo", // Add GitHub link if available
      date: "October 2024",
    },
    {
      title: "Baby Monitoring Smart Cradle: IoT-Based System",
      technologies: ["Java", "Android Studio", "Firebase", "Arduino (C++)", "Machine Learning"],
      description: "Development of an Android mobile application using Java, which communicates with a prototype via Firebase. Designed the prototype using Arduino and integrated sensors.",
      githubUrl: "#", // Add GitHub link if available
      date: "June 2024",
    },
    {
      title: "TaskTrack: Task Management Application",
      technologies: ["Java", "Firebase", "Android Studio"],
      description: "Development of a mobile application for task management, featuring event scheduling and implementation of the Pomodoro technique.",
      githubUrl: "#", // Add GitHub link if available
      date: "February 2024",
    },
    {
      title: "Trackify: Personal Productivity Management",
      technologies: ["JEE", "MySQL"],
      description: "Development of a web application for tracking daily habits and planning tasks, with a rewards system.",
      githubUrl: "#", // Add GitHub link if available
      date: "November 2023",
    },
  ];

  // Sort projects by date (most recent first)
  const sortedProjects = projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-400 to-gray-900 bg-clip-text text-transparent">
        Project Showcase
      </h1>

      <p className="text-center text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
        Explore a curated collection of my professional and academic projects. Dive deeper by clicking on individual cards to access GitHub repositories and detailed information.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sortedProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            technologies={project.technologies}
            description={project.description}
            // videoUrl={project.videoUrl}
            githubUrl={project.githubUrl}
            date={project.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
