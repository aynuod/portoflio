import React from 'react';

const ProfessionalExperience = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      description: "Implementation of a loyalty system based on microservices architecture",
      date: "July 2024 - September 2024",
      company: "Attijariwafa Bank, Casablanca",
      logo: "logoawb.png",
      responsibilities: [
        "Designed microservices architecture following DDD principles.",
        "Developed and deployed loyalty module, including backend with Spring, Docker, and frontend with React.",
        "Integrated MongoDB for data management.",
        "Tested loyalty module APIs using Postman to ensure proper functionality."
      ]
    },
    {
      title: "Web Developer Intern",
      description: "Development of an Online Credit Application Platform",
      date: "June 2023 - August 2023",
      company: "SALAFIN BMCE Group, Casablanca",
      logo: "logosalafin.png",
      responsibilities: [
        "Designed and implemented a complete online credit application process for prospects using PHP, HTML, CSS, and JavaScript.",
        "Integrated MySQL databases for user information management and application tracking."
      ]
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-400 to-gray-900 bg-clip-text text-transparent">
        Professional Experience
      </h1>
      
      <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
        My professional journey has been marked by diverse and enriching internships, 
        where I've had the opportunity to work on cutting-edge projects in the banking 
        and financial technology sectors. These experiences have honed my technical skills 
        and given me valuable insights into the industry's best practices and innovations.
      </p>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300" />
        
        {experiences.map((experience, index) => (
          <div key={index} className={`flex mb-16 ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}>
            <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
              <div className="p-6 rounded-lg shadow-lg bg-opacity-80 backdrop-filter backdrop-blur-lg">
                <h2 className="text-xl font-semibold text-gray-800">{experience.title}</h2>
                <p className="text-md text-gray-600">{experience.description}</p>
                <p className="text-sm text-indigo-900 mt-2">{experience.company}</p>
                <ul className="mt-4 list-disc pl-5">
                  {experience.responsibilities.map((item, idx) => (
                    <li key={idx} className="text-gray-700 text-sm mb-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-2/12 flex flex-col items-center justify-start relative">
              <div className="w-8 h-8 absolute top-0 rounded-full bg-white border-4 border-indigo-900 z-10" />
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-12 h-12 rounded-full border-2 border-gray-300 object-cover z-20 mt-12"
              />
            </div>
            <div className={`w-5/12 ${index % 2 === 0 ? "pl-8" : "pr-8"} flex items-start`}>
              <p className={`text-sm font-medium text-gray-500 mt-2 ${index % 2 === 0 ? "text-left" : "text-right w-full"}`}>
                {experience.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalExperience;