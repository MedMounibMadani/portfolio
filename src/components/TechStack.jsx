import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function TechStack() {
  const techStackData = [
    {
      "category": "Operating Systems",
      "technologies": ["Windows", "Linux"]
    },
    {
      "category": "Databases",
      "technologies": ["MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      "category": "Java",
      "technologies": ["Spring Boot", "Hibernate", "Spring Data JPA", "Spring MVC", "Spring Security"]
    },
    {
      "category": "C#",
      "technologies": [".NET Core", "ASP.NET", "EF Core"]
    },
    {
      "category": "JavaScript",
      "technologies": ["Node.js", "Express", "NestJS", "React", "Vue", "Angular"]
    },
    {
      "category": "PHP",
      "technologies": ["Symfony", "Laravel", "Blade"]
    },
    {
      "category": "Python",
      "technologies": ["Django", "Flask", "FastAPI"]
    },
    {
      "category": "AI / Machine Learning",
      "technologies": ["OpenCV", "Tensorflow"]
    },
    {
      "category": "DevOps",
      "technologies": ["Git", "CI/CD", "Maven", "Jenkins", "Docker", "Kubernetes", "AWS"]
    }
  ];
  
  const words = techStackData.map(cat => 
    cat.technologies.length > 0 
      ? `${cat.category}: ${cat.technologies.join(", ")}`
      : cat.category
  );

  return (
    <>
      <p className="text-lg md:text-xl text-white/90 max-w-3xl">
        I work with a wide range of technologies:
      </p>

      <div className="mt-8 text-2xl md:text-3xl font-mono text-white-400 h-20">
        <Typewriter
          words={words}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={10}
          delaySpeed={2000}
        />
      </div>
    </>
  );
}
