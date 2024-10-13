import MotionDiv from "@/components/motion-div";
import MotionList from "@/components/motion-list";
import Image from "next/image";
import reactIcon from "@/assets/icons/react.png";
import typescriptIcon from "@/assets/icons/typescript.png";
import javascriptIcon from "@/assets/icons/javascript.png";
import pythonIcon from "@/assets/icons/python.png";
import javaIcon from "@/assets/icons/java.png";
import html5Icon from "@/assets/icons/html5.png";
import tailwindcssIcon from "@/assets/icons/tailwindcss.png";
import shadcnuiIcon from "@/assets/icons/shadcn-ui.png";
import postgresIcon from "@/assets/icons/postgres.png";
import dockerIcon from "@/assets/icons/docker.png";
import gitIcon from "@/assets/icons/git.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import postmanIcon from "@/assets/icons/postman.svg";
import githubActionsIcon from "@/assets/icons/github-actions.png";
import phpIcon from "@/assets/icons/php-removebg-preview.png";
import jenkinsIcon from "@/assets/icons/jenkins-removebg-preview.png";
import SpringbootIcon from "@/assets/icons/springboot.png";
import androidIcon from "@/assets/icons/Android-removebg-preview.png";
import firebaseIcon from "@/assets/icons/firebase-removebg-preview.png";
import intellijIcon from "@/assets/icons/intellij.png";
import mysqlIcon from "@/assets/icons/mysql.png";
import mongoIcon from "@/assets/icons/mongodb-removebg-preview.png";
import sonarqubeIcon from "@/assets/icons/sonarqube-removebg-preview.png";

export default function Skills() {
  const data = [
    {
      title: "Languages",
      skills: [
        { name: "TypeScript", icon: typescriptIcon },
        { name: "JavaScript", icon: javascriptIcon },
        { name: "Python", icon: pythonIcon },
        { name: "Java", icon: javaIcon },
        { name: "PHP", icon: phpIcon },
      ],
    },
    {
      title: "Frontend Frameworks & Libraries",
      skills: [
        { name: "React.js", icon: reactIcon },
        { name: "shadcn/ui", icon: shadcnuiIcon },
        { name: "HTML5", icon: html5Icon },
        { name: "Tailwind CSS", icon: tailwindcssIcon },
      ],
    },
    {
      title: "Backend Frameworks",
      skills: [
        { name: "Spring Boot", icon: SpringbootIcon },
      ],
    },
    {
      title: "Databases & Storage",
      skills: [
        { name: "MongoDB", icon: mongoIcon },
        { name: "MySQL", icon: mysqlIcon },
        { name: "PostgreSQL", icon: postgresIcon },
        { name: "Firebase", icon: firebaseIcon },
      ],
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "Android Studio", icon: androidIcon },
      ],
    },
    {
      title: "DevOps & Version Control",
      skills: [
        { name: "Git", icon: gitIcon },
        { name: "GitHub Actions", icon: githubActionsIcon },
        { name: "Docker", icon: dockerIcon },
        { name: "Jenkins", icon: jenkinsIcon },
      ],
    },
    {
      title: "Tools & Environment",
      skills: [
        { name: "VS Code", icon: vscodeIcon },
        { name: "Intellij IDEA", icon: intellijIcon },
        { name: "Postman", icon: postmanIcon },
        { name: "SonarQube", icon: sonarqubeIcon },
      ],
    },
  ];

  return (
    <section id="skills" className="flex w-full flex-col items-center text-center">
      <MotionDiv>
        <h2 className="mb-4">My Skills</h2>
      </MotionDiv>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-6 md:px-2">
              <h3>{item.title}</h3>
              <MotionList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}  
      </div>
    </section>
  );
}

function SkillCard({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="group rounded-xl border-none p-5 text-center shadow-none transition-all duration-200 ease-linear hover:scale-110 hover:drop-shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center">
          <Image src={icon} alt={name} priority />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}
